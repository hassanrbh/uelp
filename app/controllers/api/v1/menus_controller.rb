# frozen_string_literal: true

module Api
  module V1
    class MenusController < ApplicationController
      before_action :authenticate_user!
      respond_to :json

      def index
        @business = Business.includes(:menus).find_by_name(params[:business_slug])
        @menus = Menu.cached_menu(@business)
        render :index, status: :ok
      end

      def index_cache
        Rails.cache.fetch(['v1', self.class.name.to_s, :index], expires_in: 60.minutes) do
        end
      end

      def show
        @business = Business.includes(:menus).find_by_name(params[:business_slug]).includes(:menus)
        @menu = Menu.with_attached_images.where(business_id: @business.id, name: params[:menu_name]).first
        render :show, status: :ok
      end

      def create
        @business = Business.find_by_name(params[:business_slug])
        @menu = @business.menus.new(menus_params)
        if @menu.save
          render :create, status: :created
          return
        end
        render json: {
          error: @menu.errors.full_messages
        }, status: :created
      end

      def update
        @menu = Menu.find_by_name(params[:menu_name])
        render :update, status: :ok if @menu.update(update_menus_params)
        render json: {
          error: @menu.errors.full_messsages
        }, status: :ok
      end

      def destroy
        @menu = Menu.find_by_name(params[:menu_name])
        @menu.destroy!
        render json: {
          @menu.name => 'it been destroyed'
        }, status: :ok
      end

      def popular_dishes; end

      private

      def menus_params
        params.require(:menu).permit(:name, :ingredients, :price)
      end

      def update_menus_params
        params.require(:menu).permit(:name, :ingredients, :price)
      end
    end
  end
end
