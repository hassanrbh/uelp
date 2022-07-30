# frozen_string_literal: true

module Api
  module V1
    class WorkingHoursController < ApplicationController
      before_action :authenticate_user!

      def index
        @business = Business.find_by_name(params[:business_slug])
        @working_hours = WorkingHour.find_by(business_id: @business.id)
        render :index, status: :ok if stale?(last_modified: @working_hours.updated_at, etag: @working_hours)
      end

      def index_cache
        Rails.cache.fetch([self.class.name, :index], expires_in: 24.hours) do
        end
      end
    end
  end
end
