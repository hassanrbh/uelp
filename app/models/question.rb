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
    if !!(self.question =~ /.*(Why|who|why|Who|Is|is|I|what|What|Do|do|did|Did).*/) && self.question.include?("?")
      return true
    end
    return errors.add(:question, "Oops! Your post needs to be in the form of a question before we can publish it.")
  end
end
