Rails.application.routes.draw do
  devise_for :businesses
  devise_for :users, controllers: {
    sessions: "users/sessions",
    registrations: "users/registrations"
  }, path: "user/", path_names: {
    sign_in: 'login',
    sign_out: "logout",
    sign_up: "register"
  }

  namespace :api do
    namespace :v1 do
      resources :current_user, only: [:index]
    end
  end
end

