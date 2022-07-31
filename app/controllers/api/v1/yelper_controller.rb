# frozen_string_literal: true

module Api
  module V1
    class YelperController < ApplicationController
      def show
        @yelper = User.find_by_username(params[:slug])
        if @yelper.present?
          render :show, status: :ok
        else
          render :error, status: :not_found
        end
      end
    end
  end
end
