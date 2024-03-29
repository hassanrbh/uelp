# frozen_string_literal: true

module Api
  module V1
    class BusinessesController < ApplicationController
      before_action :authenticate_user!
      respond_to :json

      def index
        limit = params[:limit]
        search_categorie = params[:search_by_category]
        country =
          (
            if params[:country].present?
              params[:country].downcase
            else
              params[:country]
            end
          )
        state = params[:state]
        search_by_name = params[:search_by_name]
        if limit.present?
          @businesses =
            Business.includes(:price).all.order(:created_at).limit(limit)
          render :index, status: :ok
        elsif search_categorie.present?
          search(search_categorie, country, state)
        elsif search_by_name.present?
          search_by(search_by_name)
        else
          render :sick_of_loading, status: :ok
        end
      end

      def search_by(name)
        @latest_businesses =
          Business.filter_by_name(name).includes(:price).with_attached_images
        render :latest, status: :ok
      end

      def latest
        @latest_businesses = Business.filter_by_latest_cached
        if stale?(last_modified: @latest_businesses.last.updated_at)
          render :latest, status: :ok
        end
      end

      def latest_cache
        Rails.fetch(
          ["v1", self.class.name.to_s, :latest],
          expires_in: 40.minutes
        ) {}
      end

      def search(search_category, country, state)
        @businesses =
          if !country.nil?
            Business.search_by_category_and_country(search_category, country)
          elsif !state.nil?
            Business.search_by_category_and_country_and_state(
              search_category,
              country,
              state
            )
          else
            Business.search_by_category(search_category)
          end
        render json: @businesses.to_json, status: :ok
      end

      def show
        @business = Business.with_attached_images.find_by_name(params[:slug])
        if @business.present?
          if stale?(last_modified: @business.updated_at, public: true)
            render :show, status: :ok
            nil
          end
        else
          render json: { errors: ["There is no business associated"] }
        end
      end

      def edit
        @business = Business.find_by_name(params[:slug])
        if @business.update(business_params_edit) &&
             stale?(last_modified: @business.updated_at, public: true)
          render json: @business, status: :ok
          return
        end
        render json: {
                 errors: ["May be there is not a business"]
               },
               status: :not_found
      end

      def filtering_params(params)
        params.slice(:search_by_category, :country, :state)
      end

      def business_params_edit
        permissions = %i[
          description
          zip_code
          city
          state
          country
          address
          address_1
          address_2
          phone_number
          menu_web_address
          hours_of_opening
          min_price
          max_price
          categorie_name
        ]

        params.require(:business).permit(permissions)
      end
    end
  end
end
