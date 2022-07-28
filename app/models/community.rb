# == Schema Information
#
# Table name: communities
#
#  id          :bigint           not null, primary key
#  business_id :bigint
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  question_id :integer
#
class Community < ApplicationRecord
  belongs_to :business, dependent: :destroy
  has_many :questions, dependent: :destroy
  has_many :answers, dependent: :destroy
end
