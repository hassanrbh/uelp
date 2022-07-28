# == Schema Information
#
# Table name: answers
#
#  id           :bigint           not null, primary key
#  answer       :string           not null
#  user_id      :bigint
#  question_id  :bigint
#  community_id :bigint
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
class Answer < ApplicationRecord
  belongs_to :user
  belongs_to :community
  belongs_to :question

  has_one :business, through: :community, source: :business
end
