# == Schema Information
#
# Table name: notifies
#
#  id          :bigint           not null, primary key
#  business_id :bigint
#  question_id :bigint
#  user_id     :bigint
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

#* according to creating a question and notify the business owner
  # !. create a new record question
  # !. notify the business owner that we have a new question accord his business
    # ?. create a new record notifies {
    # ?. business_id,
    # ?. question_id,
    # ?. user_id
    #? }
    #* then the business owner can check their notifes [has_many association]

class Notify < ApplicationRecord
  belongs_to :business
  belongs_to :question
  belongs_to :notifyer, class_name: "User", :foreign_key => :user_id
end
