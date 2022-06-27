Rails.application.routes.draw do
  devise_for :businesses, controllers: {
    sessions: "businesses/sessions",
    registrations: "businesses/registrations",
  }, path: "biz/", path_names: {
    sign_in: 'login',
    sign_out: "logout",
    sign_up: "register"
  }

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
      resources :current_biz, only: [:index]
    end
  end
end

