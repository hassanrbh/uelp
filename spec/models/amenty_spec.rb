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
require 'rails_helper'

RSpec.describe Amenty, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
