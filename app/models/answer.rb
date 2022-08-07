# frozen_string_literal: true

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
#  business_id  :integer
#
class Answer < ApplicationRecord
  belongs_to :user
  belongs_to :community
  belongs_to :question, touch: true
  belongs_to :business

  validates :answer, presence: true, :uniqueness => true

  has_one :notify_answer

  has_many :help_fuls
  has_many :reports
end
