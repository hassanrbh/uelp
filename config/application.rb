require_relative "boot"

require "rails/all"

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Api
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 7.0
    
    # Configuration for the application, engines, and railties goes here.
    #
    # These settings can be overridden in specific environments using the files
    # in config/environments, which are processed later.
    #
    # config.time_zone = "Central Time (US & Canada)"
    # config.eager_load_paths << Rails.root.join("extras")

    # Only loads a smaller set of middleware suitable for API only apps.
    # Middleware like session, flash, cookies can be added back manually.
    # Skip views, helpers and assets when generating a new resource.
    config.api_only = true
    config.active_job.queue_adapter = :resque
    config.active_job.queue_name_prefix = Rails.env

    # for our testing generators
    config.generators do |g|
      g.test_framework :rspec,
        :fixtures => true,
        :view_specs => true,
        :helper_specs => false,
        :routing_specs => false,
        :controller_specs => true,
        :request_specs => true
    end

    Rails.application.configure do
      config.action_mailer.raise_delivery_errors = true
      config.action_mailer.perform_deliveries = true
      config.action_mailer.delivery_method = :smtp
      config.action_mailer.smtp_settings = {
        :address => "smtp-relay.sendinblue.com",
        :port => 587,
        :user_name => "hassantarif31@gmail.com",
        :password => "sfvaZCQ2Mkt4mNUn",
        :authentication => "login",
        :enable_starttls_auto => true
      }
    end

    config.session_store :cookie_store, key: "_interslice_session"
    config.middleware.use ActionDispatch::Cookies
    config.middleware.use config.session_store, config.session_options
  end
end
