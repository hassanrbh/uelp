# frozen_string_literal: true

module Api
  module V1
    class CurrentUserController < ApplicationController
      before_action :authenticate_user!

      def index
        @reviews = Review.where(user: current_user).count
        render :index, status: :ok
      end
    end
  end
end
