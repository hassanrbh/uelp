class Api::V1::Users::SessionsController < Devise::SessionsController
  respond_to :json

  private

  def respond_with(resource, _opts = {})
      render json: {
        message: "you are logged In",
        user: current_user,
      }, :status => :ok
  end

  def respond_to_on_destroy
    current_user ? log_out_success : log_out_failure
  end

  def log_out_success
    render json: { message: "you are logged out" }, status: :ok
  end

  def log_out_failure
    render json: { message: "Hmm something happened"}, status: :unauthorized
  end
end