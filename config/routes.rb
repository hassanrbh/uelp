# frozen_string_literal: true

require "resque/server"

Rails.application.routes.draw do
  devise_for :businesses,
             controllers: {
               sessions: "businesses/sessions",
               registrations: "businesses/registrations"
             },
             path: "biz/",
             path_names: {
               sign_in: "login",
               sign_out: "logout",
               sign_up: "register"
             }

  devise_for :users,
             controllers: {
               sessions: "users/sessions",
               registrations: "users/registrations"
             },
             path: "user/",
             path_names: {
               sign_in: "login",
               sign_out: "logout"
             }

  mount Resque::Server.new, at: "/jobs"
  mount ActionCable.server => "/cable"

  namespace :api do
    namespace :v1 do
      resources :current_user, only: [:index]
      resources :current_biz, only: [:index]
      resources :businesses, only: %i[show index edit], param: :slug do
        resources :menus,
                  only: %i[show index create update destroy],
                  param: :menu_name
        get "/popular_dishes", to: "menu#popular_dishes"
        resources :working_hours, only: [:index]
        resources :images, only: %i[create show index]
        resources :reviews, only: %i[create index]
        resources :drafts, only: %i[create index destroy]
        resources :amentys, only: [:index]
        resources :share, only: [:create]
        resources :questions, only: %i[create index show] do
          resources :answers, only: %i[index create show] do
            collection do
              get "/popular_answers", to: "answers#popular_answers"
              get "/newest_answers", to: "answers#newest_first_answers"
            end
            resources :help_fuls, only: %i[index]
            post "/helpful", to: "help_fuls#helpful"
            post "/unhelpful", to: "help_fuls#unhelpful"
            resources :notify_answers, only: %i[create index]
            resources :reports, only: %i[create]
            post "/cancel", to: "reports#cancel"
          end
        end
        get "/random_questions", to: "questions#random_questions_to_answer"
      end
      resources :notifies, only: %i[index]
      resources :yelper, only: [:show], param: :slug
      get "/latest", to: "businesses#latest"
    end
  end
end
