# == Schema Information
#
# Table name: images
#
#  id          :bigint           not null, primary key
#  user_id     :bigint
#  business_id :bigint
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Image < ApplicationRecord
  belongs_to :user
  belongs_to :business

  has_one_attached :photo
  has_many_attached :images
end
