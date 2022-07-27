# == Schema Information
#
# Table name: communities
#
#  id          :bigint           not null, primary key
#  business_id :bigint
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Community < ApplicationRecord
end
