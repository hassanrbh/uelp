class Users::SessionsController < Devise::SessionsController
  respond_to :json

  private

  def respond_with(resource, _opts = {})
    @errors = []

    if (params[:user].present?) 
      params[:user][:email].present? ? "" : check_providation("email")
      params[:user][:password].present? ?  "" : check_providation("password")
    end

    if resource.persisted?
      # User.notify_latest_sign_in(resource).deliver_now
      render :create, :status => :ok
    else
      user = User.find_by_email(params[:user][:email])
      if (user.active_for_authentication?)
        @errors.push("email or password are incorrect");
        render json: { 
          errors: @errors,
        }, :status => :ok
      else
        @errors.push("account has been locked");
        render json: { 
          errors: @errors,
        }, :status => :ok
      end

    end
    
  end

  def check_providation(checker_provider)
    @errors.push("#{checker_provider} must be provided");
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