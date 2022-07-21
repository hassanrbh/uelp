# == Schema Information
#
# Table name: working_hours
#
#  id            :bigint           not null, primary key
#  business_id   :integer          not null
#  working_hours :json             not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#
require 'rails_helper'

RSpec.describe WorkingHour, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
