class CountBusinessesJob < ApplicationJob
  queue_as :default

  def perform(*args)
    Rails.cache.fetch([:cache_key, :sum],expires_in: 30.minutes) do
      Business.count
    end
  end
end
