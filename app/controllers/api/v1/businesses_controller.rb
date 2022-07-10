class Api::V1::BusinessesController < ApplicationController
  before_action :authenticate_user!
  respond_to :json

  def index
    limit = params[:limit]
    search_categorie = params[:search_by_category]
    country = params[:country].present? ? params[:country].downcase : params[:country]
    state = params[:state]
    search_by_name = params[:search_by_name]
    if limit.present?
      @businesses = 
        Business
          .includes(:price) 
            .all
              .order(:created_at)
                .limit(limit);
      render :index, :status => :ok
    elsif search_categorie.present?
      return search(search_categorie, country, state)
    elsif search_by_name.present?
      return search_by(search_by_name)
    else
      render :sick_of_loading, :status => :ok
    end
  end

  def search_by(name)
    @latest_businesses = Business.filter_by_name(name).includes(:price).with_attached_images
    render :latest, :status => :ok
  end

  def latest
    @latest_businesses = Business.filter_by_latest.includes(:price).with_attached_images
    render :latest, :status => :ok
  end

  def search(search_category, country, state)
    if !(country.nil?)
      @businesses = Business.search_by_category_and_country(search_category, country)
    elsif !(state.nil?)
      @businesses = Business.search_by_category_and_country_and_state(search_category, country, state)
    else
      @businesses = Business.search_by_category(search_category)
    end
    render :json => @businesses.to_json, :status => :ok
  end

  def show
    @business = Business.with_attached_images.find_by_name(params[:slug])
    if @business.present?
      render :show, :status => :ok
      return ;
    end
    render :json => {
      :errors => ["There is no business associated"]
    }
  end

  def filtering_params(params)
    params.slice(:search_by_category, :country, :state)
  end
end