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
require 'rails_helper'

RSpec.describe HelpFul, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
