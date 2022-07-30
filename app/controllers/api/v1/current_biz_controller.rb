# frozen_string_literal: true

module Api
  module V1
    class CurrentBizController < ApplicationController
      before_action :authenticate_business!
      def index
        render :index, status: :ok
      end
    end
  end
end
