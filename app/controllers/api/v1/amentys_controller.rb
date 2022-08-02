# frozen_string_literal: true

module Api
  module V1
    class AmentysController < ApplicationController
      before_action :authenticate_user!
      def index
        @business =
          Business.includes(:amenty).find_by_name(params[:business_slug])
        @amenty = Amenty.cache_amentys(@business)
        if @amenty.present?
          render :index, status: :ok
          return
        end
        render json: {
                errors: ["there is no amentys for this business"]
              },
              status: :not_found
      end
    end
  end
end
