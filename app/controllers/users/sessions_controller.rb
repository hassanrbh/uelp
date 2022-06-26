class Users::SessionsController < Devise::SessionsController
  respond_to :json

  private

  def respond_with(resource, _opts = {})
    if resource.persisted?
        render json: {
          code: 200,
          message: "you are logged In",
          user: current_user,
        }, :status => :ok
    else 
        render json: {
          status: 401,
          message: "Couldn't find an active session."
        }, status: :unauthorized
    end
  end

  def respond_to_on_destroy
    log_out_success && return if current_user
    log_out_failure
  end

  def log_out_success
    render json: { message: "you are logged out" ,code: 202}, status: :ok
  end

  def log_out_failure
    render json: { message: "Hmm something happened", code: 403}, status: :unauthorized
  end
end