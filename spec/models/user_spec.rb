# frozen_string_literal: true

# == Schema Information
#
# Table name: users
#
#  id                     :bigint           not null, primary key
#  email                  :string           default(""), not null
#  encrypted_password     :string           default(""), not null
#  reset_password_token   :string
#  reset_password_sent_at :datetime
#  remember_created_at    :datetime
#  sign_in_count          :integer          default(0), not null
#  current_sign_in_at     :datetime
#  last_sign_in_at        :datetime
#  current_sign_in_ip     :string
#  last_sign_in_ip        :string
#  confirmation_token     :string
#  confirmed_at           :datetime
#  confirmation_sent_at   :datetime
#  unconfirmed_email      :string
#  failed_attempts        :integer          default(0), not null
#  unlock_token           :string
#  locked_at              :datetime
#  created_at             :datetime         not null
#  updated_at             :datetime         not null
#  username               :string           not null
#  first_name             :string           not null
#  last_name              :string           not null
#  zip_code               :integer          not null
#  birth_date             :datetime
#  gender                 :integer          not null
#  phone_number           :string           not null
#  full_address           :string
#  account_active         :boolean          default(TRUE)
#
require 'rails_helper'

RSpec.describe User, type: :model do
  describe 'validations' do
    it { validate_presence_of(:email) }
    it { validate_presence_of(:dpassword) }
  end
end
