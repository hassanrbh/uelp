# == Schema Information
#
# Table name: businesses
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
#  created_at             :datetime         not null
#  updated_at             :datetime         not null
#  name                   :string           not null
#  description            :text             not null
#  address                :string           not null
#  address_1              :string
#  address_2              :string
#  zip_code               :integer          not null
#  state                  :string           not null
#  country                :string           not null
#  phone_number           :string           not null
#  web_address            :string
#  menu_web_address       :string
#  hours_of_opening       :integer          not null
#  min_price              :decimal(8, 2)    not null
#  max_price              :decimal(8, 2)    not null
#
class Business < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
        :recoverable, :rememberable, :validatable, :trackable, :jwt_authenticatable, jwt_revocation_strategy: JwtDenylist

  has_many_attached :photos
  has_one :price,
      class_name: "Price",
      primary_key:  :id,
      foreign_key: :businesses_id,
      dependent: :destroy

  after_create :create_price_point
  private 
  # def get_average_amout_expected_by_dollar_sign
  #   self.price.dollar_signs
  # end

  def create_price_point
    if (min_price != nil && max_price != nil) && (min_price != 0 && max_price != 0)
      Price.create(
          :min_price => self.min_price,
          :max_price => self.max_price,
          :businesses_id => self.id
        )
    end
  end
end
