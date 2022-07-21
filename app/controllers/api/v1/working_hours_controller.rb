class Api::V1::WorkingHoursController < ApplicationController
  def index
    @business = Business.find_by_name(params[:business_slug]);
    @working_hours = WorkingHour.find_by(:business_id => @business.id)
    render :index, :status => :ok
  end
end
