# frozen_string_literal: true

# == Schema Information
#
# Table name: amenties
#
#  id          :bigint           not null, primary key
#  business_id :bigint
#  amenties    :text             not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
FactoryBot.define do
  factory :amenty do
  end
end
