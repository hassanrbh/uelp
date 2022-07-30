# frozen_string_literal: true

class CountBusinessesJob < ApplicationJob
  queue_as :default

  def perform(*_args)
    Rails.cache.fetch(%i[cache_key sum], expires_in: 30.minutes) do
      Business.count
    end
  end
end
