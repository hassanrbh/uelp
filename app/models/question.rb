# == Schema Information
#
# Table name: questions
#
#  id           :bigint           not null, primary key
#  community_id :bigint
#  question     :string           not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  user_id      :integer
#  business_id  :integer
#
class Question < ApplicationRecord
  validates :question, presence: true
  before_validation :check_question

  belongs_to :community
  belongs_to :user
  belongs_to :business
  has_many :answers, dependent: :destroy

  private

  def check_question
    if (self.question.include?("?"))
      if (self.question.include?("who") || self.question.include?("Who") || self.question.include?("why") || self.question.include?("what"))
        return true
      else
        errors.add(:question, "should contain who")
      end
    else
      errors.add(:question, "should contain a ?")
    end
  end
end
