# frozen_string_literal: true

# == Schema Information
#
# Table name: answers
#
#  id              :bigint           not null, primary key
#  answer          :string           not null
#  user_id         :bigint
#  question_id     :bigint
#  community_id    :bigint
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  business_id     :integer
#  help_fuls_count :integer          default(0), not null
#
require 'rails_helper'

RSpec.describe Answer, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
