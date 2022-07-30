# frozen_string_literal: true

# == Schema Information
#
# Table name: questions
#
#  id            :bigint           not null, primary key
#  community_id  :bigint
#  question      :string           not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  user_id       :integer
#  business_id   :integer
#  answers_count :integer          default(0)
#
class Question < ApplicationRecord
  validates :question, presence: true
  before_validation :check_question

  belongs_to :community
  belongs_to :user
  belongs_to :business
  has_many :answers

  after_save :cache_count_answers

  scope :sort_by_most_answered_question,
        lambda { |business|
          where('community_id = ?', business.community.id).order(
            'answers_count DESC'
          )
        }

  scope :random_questions_unanswered,
        lambda { |business|
          where('community_id = ?', business.community.id)
            .where.not(id: Answer.select(:question_id))
            .take(3)
        }

  scope :sort_by_newest_questions,
        lambda { |business|
          where('community_id = ?', business.community.id).order(
            'created_at DESC'
          )
        }

  scope :sort_by_popular,
        ->(business) { where('community_id = ?', business.community.id) }

  def cache_count_answers
    Rails
      .cache
      .fetch(
        ['v1', self.class.name, :cache_count_answers, question],
        expires_in: 4.hours
      ) do
        self.answers_count = answers.count
        save!
      end
  end

  private

  def check_question
    if !(
        question =~
          /.*(Why|who|why|Who|Is|is|I|what|What|Do|do|did|Did).*/
      ).nil? && question.include?('?')
      return true
    end

    errors.add(
      :question,
      'Oops! Your post needs to be in the form of a question before we can publish it.'
    )
  end
end
