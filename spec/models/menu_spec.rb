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
require 'rails_helper'

RSpec.describe Menu, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
