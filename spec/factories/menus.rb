# == Schema Information
#
# Table name: menus
#
#  id          :bigint           not null, primary key
#  name        :string           not null
#  ingredients :string           not null
#  price       :integer          default(0), not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
FactoryBot.define do
  factory :menu do
    
  end
end
