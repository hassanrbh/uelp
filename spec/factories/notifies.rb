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
FactoryBot.define do
  factory :notify do
    
  end
end
