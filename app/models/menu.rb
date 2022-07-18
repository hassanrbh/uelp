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
  validates :name, presence: true
  validates :price, presence: true
  validates :ingredients, presence: true

  belongs_to :business
end
