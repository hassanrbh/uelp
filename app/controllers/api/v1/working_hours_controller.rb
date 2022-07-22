class Api::V1::WorkingHoursController < ApplicationController
  before_action :authenticate_user!
  
  def index
    @business = WorkingHour.cached_working_hours(params[:business_slug])
    @working_hours = WorkingHour.find_by(:business_id => @business.id)
    if stale?(:last_modified => @working_hours.updated_at, :etag => @working_hours) 
      render :index, :status => :ok
    end
  end

  def index_cache
    Rails.cache.fetch([self.class.name, :index], expires_in: 24.hours) do
      
    end
  end
end
