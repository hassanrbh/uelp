source "https://rubygems.org"
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby "3.0.2"


gem "rails", "~> 7.0.3"
gem "pg", "~> 1.1"
gem "puma", "~> 5.0"
gem "jbuilder"
gem "tzinfo-data", platforms: %i[ mingw mswin x64_mingw jruby ]
gem "bootsnap", require: false
gem "image_processing", "~> 1.2"
gem "rack-cors"


# auth
gem "devise"
gem "devise-jwt"
gem "authtrail"
gem "jwt"
gem "bcrypt"

gem "annotate"
gem "geocoder"
gem "resque"
gem "resque-scheduler"
gem "sendinblue"

gem 'redis-rails'
gem "hiredis"
gem "redis", "~> 4.0", :require => ['redis', 'redis/connection/hiredis']
gem "redis-namespace"
gem "kredis"
gem "redis-rack-cache"
gem 'redis-objects', '>= 2.0.0.alpha'

# utils
gem 'execution_time'

# active storage 
gem 'cloudinary'

gem 'api-pagination' 
gem 'will_paginate', '~> 3.3'


group :development, :test do
  gem "debug", platforms: %i[ mri mingw x64_mingw ]
  gem "rspec-rails"
  gem "factory_bot_rails"
  gem "rails-controller-testing"
  gem 'dotenv-rails'
end

group :development do
  gem "spring"
  gem "faker"
  gem "capybara"
  gem "guard-rspec"
  gem "launchy"

end

group :test do
  gem 'shoulda-matchers'
end

gem "ruby-lsp", "~> 0.2.1", :group => :development
