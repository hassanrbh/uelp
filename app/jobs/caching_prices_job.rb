class CachingPricesJob < ApplicationJob
  queue_as :default
  self.queue_adapter = :sidekiq

  def perform(*args)
    prices = Price.includes(:business)
    Rails.cache.fetch("prices") do
      prices.to_json(include: :business)
    end
  end
end
