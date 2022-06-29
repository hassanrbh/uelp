class Api::V1::BusinessesController < ApplicationController
  before_action :authenticate_user!
  def index
    limit = params[:limit]
    if limit.present?
      @businesses = 
        Business
          .includes(:price)
            .all
              .order(:created_at)
                .limit(limit);
      render :index, :status => :ok
    else
      render :sick_of_loading, :status => :ok
    end
  end

  def show
    @business = Business.find_by_name(params[:slug])
    render :show, :status => :ok
  end
end