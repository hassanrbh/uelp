# frozen_string_literal: true

class ApplicationController < ActionController::API
  before_action :configure_permitted_parameters, if: :devise_controller?
  include ActionController::Caching

  protected

  def configure_permitted_parameters
    permitted_params = if params[:user].present?
                         %i[
                           first_name
                           last_name
                           gender
                           phone_number
                           zip_code
                           birth_date
                         ]
                       else
                         %i[
                           name
                           description
                           address
                           address_1
                           address_2
                           zip_code
                           state
                           country
                           phone_number
                           web_address
                           menu_web_address
                           hours_of_opening
                           min_price
                           max_price
                           city
                         ]
                       end
    devise_parameter_sanitizer.permit(:sign_up, keys: permitted_params)
  end
end
