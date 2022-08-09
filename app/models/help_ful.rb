# == Schema Information
#
# Table name: help_fuls
#
#  id         :bigint           not null, primary key
#  user_id    :bigint
#  answer_id  :bigint
#  indicator  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class HelpFul < ApplicationRecord
  belongs_to :user
  belongs_to :answer, counter_cache: true

  validates :indicator, presence: true
end
