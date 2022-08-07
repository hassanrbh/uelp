# frozen_string_literal: true

module Api
  module V1
    class YelperController < ApplicationController
      before_action :authenticate_user!

      def show
        @yelper = User.find_by_username(params[:slug])
        return render :show, status: :ok if @yelper.present?
        return render :error, status: :not_found
      end
    end
  end
end
