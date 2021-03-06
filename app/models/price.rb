# == Schema Information
#
# Table name: prices
#
#  id            :bigint           not null, primary key
#  min_price     :decimal(8, 2)    not null
#  max_price     :decimal(8, 2)    not null
#  average       :integer          not null
#  dollar_signs  :string           not null
#  businesses_id :bigint
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#
class Price < ApplicationRecord
  validates :min_price, :presence => true, numericality: true
  validates :max_price, :presence => true, numericality: true
  validates :average, :presence => true, numericality: true
  validates :dollar_signs, presence: true, length: {maximum: 5}

  belongs_to :business,
      class_name: "Business",
      primary_key:  :id,
      foreign_key: :businesses_id,
      dependent: :destroy,
      touch: true

  before_validation :add_average_point
  before_validation :configure_dollar_signs

  after_save :cache_me

  private

  def cache_me
    CachingPricesJob.perform_later
  end

  protected

  def add_average_point
    self.average = ((self.min_price + self.max_price) / 2).round(0)
  end

  def configure_dollar_signs
    if (self.average != nil && self.average != 0)
      case self.average
      when (0..99)
        self.dollar_signs = "$"
      when (99..200)
        self.dollar_signs = "$$"
      when (200..500)
        self.dollar_signs = "$$$"
      when (200..800)
        self.dollar_signs = "$$$$"
      else 
        self.dollar_signs = "$$$$$"
      end
    end
  end
end
