# == Schema Information
#
# Table name: communities
#
#  id          :bigint           not null, primary key
#  business_id :bigint
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Community < ApplicationRecord
  belongs_to :business, dependent: :destroy
  has_many :questions, dependent: :destroy
end
