# == Schema Information
#
# Table name: help_fuls
#
#  id         :bigint           not null, primary key
#  user_id    :bigint
#  answer_id  :bigint
#  indicator  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class HelpFul < ApplicationRecord
  belongs_to :user
  belongs_to :answer

  validates :indicator, presence: true

  def self.sum_indicators(answer)
    Rails
      .cache
      .fetch(["v1", self, :sum_indicators], expires_in: 1.hour) do
        @help_fuls = []
        
        HelpFul
          .where(answer: answer)
          .each { |help| @help_fuls << help.indicator }

        return @help_fuls
      end
  end
end
