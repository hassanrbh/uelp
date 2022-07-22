class Api::V1::WorkingHoursController < ApplicationController
  before_action :authenticate_user!
  
  def index
    @business = Business.find_by_name(params[:business_slug]);
    @working_hours = WorkingHour.find_by(:business_id => @business.id)
    if stale?(:last_modified => @working_hours.updated_at, :etag => @working_hours) 
      render :index, :status => :ok
    end
  end
end
