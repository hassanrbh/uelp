# == Schema Information
#
# Table name: reports
#
#  id             :bigint           not null, primary key
#  user_id        :bigint
#  malicious_id   :integer
#  report_content :string           not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#  answer_id      :bigint           not null
#
require 'rails_helper'

RSpec.describe Report, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
