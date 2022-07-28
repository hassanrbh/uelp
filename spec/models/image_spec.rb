# == Schema Information
#
# Table name: images
#
#  id          :bigint           not null, primary key
#  user_id     :bigint
#  business_id :bigint
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
require 'rails_helper'

RSpec.describe Image, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
