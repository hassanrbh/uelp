# == Schema Information
#
# Table name: answers
#
#  id           :bigint           not null, primary key
#  answer       :string           not null
#  user_id      :bigint
#  question_id  :bigint
#  community_id :bigint
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  business_id  :integer
#
FactoryBot.define do
  factory :answer do
    
  end
end