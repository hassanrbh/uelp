# == Schema Information
#
# Table name: questions
#
#  id           :bigint           not null, primary key
#  community_id :bigint
#  question     :string           not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
class Question < ApplicationRecord
  validates :question, presence: true
  before_validation :check_question

  belongs_to :community
  has_one :business, through: :community, source: :business

  private

  def check_question
    if (self.question.include?("?"))
      if (self.question.include?("who") || self.question.include?("Who"))
        return true
      else
        errors.add(:question, "should contain who")
      end
    else
      errors.add(:question, "should contain a ?")
    end
  end
end
