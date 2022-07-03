class Api::V1::BusinessesController < ApplicationController
  before_action :authenticate_user!

  def index
    limit = params[:limit]
    search_categorie = params[:search_by_category]
    country = params[:country].present? ? params[:country].downcase : params[:country]
    state = params[:state]
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
    else
      render :sick_of_loading, :status => :ok
    end
  end

  def latest
    @latest_businesses = Business.filter_by_latest 
    render :json => @latest_businesses.to_json(), :status => :ok
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
    @business = Business.find_by_name(params[:slug])
    if (@business.present?)
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