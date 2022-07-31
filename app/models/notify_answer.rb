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

end
