# == Schema Information
#
# Table name: prices
#
#  id            :bigint           not null, primary key
#  min_price     :decimal(8, 2)    not null
#  max_price     :decimal(8, 2)    not null
#  average       :integer          not null
#  dollar_signs  :string           not null
#  businesses_id :bigint
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#
require 'rails_helper'

RSpec.describe Price, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
