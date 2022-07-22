class CachingCategoriesJob < ApplicationJob
  queue_as :default

  after_perform do |job|
    self.class.set(:wait => 24.hours).perform_later(job.arguments.first)
  end

  def perform(*args)
    Rails.cache.fetch([:filter_by_latest_cached], expires_in: 24.hours) do
      Business.filter_by_latest
    end
  end
end
