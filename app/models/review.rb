# == Schema Information
#
# Table name: reviews
#
#  id          :bigint           not null, primary key
#  user_id     :bigint
#  business_id :bigint
#  rating      :integer          not null
#  description :text             not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Review < ApplicationRecord
  validates :rating,
            presence: true,
            numericality: {
              greater_than: 0,
              less_than_or_equal_to: 5
            }
  validates :description, presence: true

  # enum rating: {
  #        not_good: 1,
  #        could_have_been_better: 2,
  #        ok: 3,
  #        good: 4,
  #        great: 5
  #      }

  belongs_to :business
  belongs_to :user

  def self.get_persentage(business, rating)
    return(
      (
        Review.where(business: @business, rating: rating).size.to_f /
          Review.all.size * 100
      ).round(0)
    )
  end
end
