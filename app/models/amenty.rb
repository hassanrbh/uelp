# frozen_string_literal: true

# == Schema Information
#
# Table name: amenties
#
#  id          :bigint           not null, primary key
#  business_id :bigint
#  amenties    :text             not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Amenty < ApplicationRecord
  belongs_to :business, touch: true
  validates :amenties, presence: true
  store :amenties,
        accessors: %i[
          offers_delivery
          offers_takeout
          vegan_options
          accept_credit_cards
          casual
          offers_catering
          private_lot_parking
          wheelchar_accessible
          gendar_neutral_rooms
          many_vegeterian_options
          moderate_noise
          good_for_groups
          good_for_lunch_and_dinner
          good_for_lunch
          free_wifi
          tv
          reservations
          accept_apple_payment
          outdoor_seating
          happy_hour
          drive_thru
          bike_parking
          waiting_service
          alcohol
          dogs_not_allowed
        ],
        coder: JSON

  def self.cache_amentys(business)
    Rails
      .cache
      .fetch(["v1", self.class.name.to_s, :cache_amentys, business.name]) do
        Amenty.includes(:business).find_by_business_id(business.id)
      end
  end
end
