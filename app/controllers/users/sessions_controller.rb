class Users::SessionsController < Devise::SessionsController
  respond_to :json

  private

  def respond_with(resource, _opts = {})
    if resource.persisted?
      render :create, :status => :ok
    else
      render :errors, :status => :unauthorized
    end
  end

  def respond_to_on_destroy
    log_out_success && return if current_user
    log_out_failure
  end

  def log_out_success
    render :logout, status: :ok
  end

  def log_out_failure
    render :logout_failure, status: :unauthorized
  end
end