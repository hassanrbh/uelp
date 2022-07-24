# == Schema Information
#
# Table name: menus
#
#  id          :bigint           not null, primary key
#  name        :string           not null
#  ingredients :string           not null
#  price       :integer          default(0), not null
#  business_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Menu < ApplicationRecord
  validates :price, presence: true
  validates :ingredients, presence: true

  belongs_to :business, touch: true
  has_many_attached :images

  def self.cached_menu(business)
    Rails.cache.fetch(["v1", self.class.name.to_s, :cached_menu, business.name], expires_in: 30.minutes) do
      Menu.includes(:business).all.where(:business_id => business.id).with_attached_images
    end
  end
end
