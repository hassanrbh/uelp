class CachingCategoriesJob < ApplicationJob
  queue_as :default

  def perform(*args)
    categories = Business.includes(:categorie)
    Rails.cache.fetch("categories") do
      categories.to_json(include: :categorie)
    end
  end
end
