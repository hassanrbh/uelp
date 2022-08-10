# frozen_string_literal: true

# == Schema Information
#
# Table name: answers
#
#  id              :bigint           not null, primary key
#  answer          :string           not null
#  user_id         :bigint
#  question_id     :bigint
#  community_id    :bigint
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  business_id     :integer
#  help_fuls_count :integer          default(0), not null
#
class Answer < ApplicationRecord
  belongs_to :user
  belongs_to :community
  belongs_to :question, counter_cache: true
  belongs_to :business

  validates :answer, presence: true, uniqueness: true

  has_one :notify_answer

  has_many :help_fuls, counter_cache: true
  has_many :reports

  scope :newest_first,
        ->(question) {
          order("created_at DESC").where("question_id = ?", question.id)
        }
  scope :popular,
        ->(question) {
          where("question_id = ?", question.id).order("help_fuls_count DESC")
        }
end
