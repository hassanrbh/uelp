# == Schema Information
#
# Table name: shares
#
#  id          :bigint           not null, primary key
#  user_id     :bigint
#  to          :string           not null
#  note        :string           not null
#  business_id :bigint
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
FactoryBot.define do
  factory :share do
    
  end
end
