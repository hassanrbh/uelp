# == Schema Information
#
# Table name: notify_answers
#
#  id          :bigint           not null, primary key
#  question_id :bigint
#  answer_id   :bigint
#  business_id :bigint
#  user_id     :bigint
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  notifyer_id :integer
#

#* according to answer a question and notify the question writer
# !. create a new record answer
# !. notify the question writer that we have a new answer
# ?. create a new record notifies {
# ?. question_id,
# ?. user_id,
# ?. answer_id,
# ?. business_id
#? }

class NotifyAnswer < ApplicationRecord
  belongs_to :question

  belongs_to :user
  belongs_to :notifyer, class_name: "User", foreign_key: :notifyer_id

  belongs_to :answer
  belongs_to :business

  def self.count_cache(current_user)
    Rails
      .cache
      .fetch(["v1", self.class.name, :count_cache], expires_in: 2.minutes) do
        NotifyAnswer.where(user_id: current_user.id).count
      end
  end
end
