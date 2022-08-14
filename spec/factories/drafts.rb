# == Schema Information
#
# Table name: drafts
#
#  id          :bigint           not null, primary key
#  user_id     :bigint
#  business_id :bigint
#  rating      :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
FactoryBot.define do
  factory :draft do
    
  end
end
