class Users::RegistrationsController < Devise::RegistrationsController
  respond_to :json

  private

  def respond_with(resource, _opts = {})
    resource.persisted? ? register_success : register_failed
  end

  def register_success
    render json: {
      message: "sign up sucessfully",
      user: current_user,
    }, status: :ok
  end

  def register_failed
    render json: { errors: "Something went Wrong" }, status: :unprocessable_entity
  end
end 
