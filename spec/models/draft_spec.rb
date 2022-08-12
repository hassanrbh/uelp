# == Schema Information
#
# Table name: drafts
#
#  id          :bigint           not null, primary key
#  user_id     :bigint
#  business_id :bigint
#  rating      :integer
#  description :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
require 'rails_helper'

RSpec.describe Draft, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
