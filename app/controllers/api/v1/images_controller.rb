# frozen_string_literal: true

module Api
  module V1
    class ImagesController < ApplicationController
      def index ; end
      def show ; end
      def create ; end

      def images_params
        params.require(:images).permit(:photo)
      end
    end
  end
end
