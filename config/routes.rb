Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      devise_for :users, controllers: {
        sessions: "api/v1/users/sessions",
        registrations: "api/v1/users/registrations"
      }
    end
  end
end
