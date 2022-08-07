# frozen_string_literal: true

module Api
  module V1
    class WorkingHoursController < ApplicationController
      before_action :authenticate_user!

      def index
        @business = Business.find_by_name(params[:business_slug])
        @working_hours = @business.working_hour
        if stale?(
            last_modified: @working_hours.updated_at,
            etag: @working_hours
          )
          render :index, status: :ok
        end
      end
    end
  end
end
