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

  scope :sort_by_most_answered_question, -> (business) {
    where("community_id = ?", business.community.id).includes(:answers)
      all
        .each { |question| question.cache_count_answers >= 1 }
  }
  
  scope :sort_by_newest_questions, -> (business) { 
    where("community_id = ?", business.community.id)
      .order("created_at DESC")
  }

  scope :sort_by_popular, -> (business) {
    where("community_id = ?", business.community.id)
  }

  def cache_count_answers
    Rails.cache.fetch(["v1", self.class.name,:cache_count_answers, self.question], expires_in: 4.hours) do
      self.answers.count
    end
  end

  private

  def check_question
    if !!(self.question =~ /.*(Why|who|why|Who|Is|is|I|what|What|Do|do|did|Did).*/) && self.question.include?("?")
      return true
    end
    return errors.add(:question, "Oops! Your post needs to be in the form of a question before we can publish it.")
  end
end
