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
gem "devise"
gem "devise-jwt"
gem "annotate"
gem "jwt"
gem "geocoder"
gem "bcrypt"
gem "resque"
gem "resque-scheduler"

gem 'redis-rails'
gem "hiredis"
gem "redis", "~> 4.0", :require => ['redis', 'redis/connection/hiredis']
gem "redis-namespace"
gem "kredis"
gem "redis-rack-cache"

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
