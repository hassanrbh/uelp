class ApplicationController < ActionController::API
  before_action :configure_permitted_parameters, if: :devise_controller?

  protected

  def configure_permitted_parameters
    if current_user
      permitted_params = [
        :first_name, 
        :last_name,
        :gender,
        :phone_number,
        :zip_code,
        :birth_date,
      ]
      devise_parameter_sanitizer.permit(:sign_up, keys: permitted_params)
    else
      permitted_params = [
        :name,
        :description,
        :address,
        :address_1,
        :address_2,
        :zip_code,
        :state,
        :country,
        :phone_number,
        :web_address,
        :menu_web_address,
        :hours_of_opening,
        :min_price,
        :max_price,
        :city,
      ]
      devise_parameter_sanitizer.permit(:sign_up, keys: permitted_params)
    end    
  end

end
