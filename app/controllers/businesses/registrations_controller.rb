# frozen_string_literal: true

module Businesses
  # this controller is for business Auth
  class RegistrationsController < Devise::RegistrationsController
    respond_to :json

    private

    def respond_with(resource, _opts = {})
      resource.persisted? ? register_success : register_failed
    end

    def register_success
      render :create, status: :ok
    end

    def register_failed
      render json: { errors: resource.errors.full_messages }, status: :unauthorized
    end
  end
end
