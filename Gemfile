# frozen_string_literal: true

source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '3.0.2'

gem 'bootsnap', require: false
gem 'image_processing', '~> 1.2'
gem 'jbuilder'
gem 'pg', '~> 1.1'
gem 'puma', '~> 5.0'
gem 'rack-cors'
gem 'rails', '~> 7.0.3'
gem 'tzinfo-data', platforms: %i[mingw mswin x64_mingw jruby]

# auth
gem 'authtrail'
gem 'bcrypt'
gem 'devise'
gem 'devise-jwt'
gem 'jwt'

gem 'annotate'
gem 'geocoder'
gem 'resque'
gem 'resque-scheduler'
gem 'sendinblue'

gem 'hiredis'
gem 'kredis'
gem 'redis', '~> 4.0', require: ['redis', 'redis/connection/hiredis']
gem 'redis-namespace'
gem 'redis-objects', '>= 2.0.0.alpha'
gem 'redis-rack-cache'
gem 'redis-rails'

# utils
gem 'execution_time'

# active storage
gem 'cloudinary'

gem 'api-pagination'
gem 'will_paginate', '~> 3.3'

group :development, :test do
  gem 'debug', platforms: %i[mri mingw x64_mingw]
  gem 'dotenv-rails'
  gem 'factory_bot_rails'
  gem 'rails-controller-testing'
  gem 'rspec-rails'
end

group :development do
  gem 'capybara'
  gem 'faker'
  gem 'guard-rspec'
  gem 'launchy'
  gem 'spring'
end

group :test do
  gem 'shoulda-matchers'
end

gem 'ruby-lsp', '~> 0.2.1', group: :development
gem 'appsignal'





gem "delayed_job", "~> 4.1"

gem "delayed_job_active_record", "~> 4.1"
