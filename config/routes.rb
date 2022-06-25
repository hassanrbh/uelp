Rails.application.routes.draw do
  devise_for :businesses
  devise_for :users, controllers: {
    sessions: "users/sessions",
    registrations: "users/registrations"
  }
  namespace :api do
    namespace :v1 do

    end
  end
end
