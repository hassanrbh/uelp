# frozen_string_literal: true

# == Schema Information
#
# Table name: questions
#
#  id            :bigint           not null, primary key
#  community_id  :bigint
#  question      :string           not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  user_id       :integer
#  business_id   :integer
#  answers_count :integer          default(0)
#  notify_me     :boolean          default(FALSE)
#
FactoryBot.define do
  factory :question do
  end
end
