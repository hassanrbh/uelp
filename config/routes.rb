Rails.application.routes.draw do
  devise_for :businesses
  devise_for :users, controllers: {
    sessions: "users/sessions",
    registrations: "users/registrations"
  }

  namespace :api do
    namespace :v1 do
      post "/current_user", to: "current_user#index"
    end
  end
end
