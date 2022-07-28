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
#
FactoryBot.define do
  factory :question do
    
  end
end
