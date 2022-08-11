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
class User < ApplicationRecord
  # Include default devise modules. Others available are:
  devise :database_authenticatable,
         :registerable,
         :recoverable,
         :rememberable,
         :validatable,
         :lockable,
         :timeoutable,
         :trackable,
         :jwt_authenticatable,
         jwt_revocation_strategy: JwtDenylist

  before_validation :merge_username
  before_validation :check_if_password_confirmation?

  has_one_attached :avatar
  has_many :login_activities, as: :user
  has_many :shares
  has_many :reviews
  has_many :business_reviews, through: :reviews, source: :business
  has_many :reports, class_name: "Report", foreign_key: :user_id
  has_many :acussations, class_name: "Report", foreign_key: :malicious_id
  has_many :answers
  has_many :business_images,
           class_name: "Image",
           primary_key: :id,
           foreign_key: :user_id
  has_many :notifies
  has_many :help_fuls
  has_many :notify_answers,
           class_name: "NotifyAnswer",
           foreign_key: :notifyer_id

  validates :email, presence: true, uniqueness: { case_sensitive: true }
  validates :username,
            presence: true,
            uniqueness: true,
            format: {
              with: /^[a-z0-9_-]{3,15}$/,
              message: "not real ",
              multiline: true
            }
  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :gender, presence: true
  validates :phone_number,
            presence: true,
            format: {
              with: /^\+?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/,
              message: "not valid",
              multiline: true
            }
  validates :zip_code,
            presence: true,
            numericality: {
              only_integer: true
            },
            length: {
              is: 5
            }
  validates :birth_date, presence: true

  enum gender: { man: 0, female: 1, non_binary: 2, other_types: 3 }

  def find_out_total_images
    total_sum = 0
    business_images.each { |image| total_sum = image.images.count }
    total_sum + business_images.count
  end

  def cache_find_out_total_images
    Rails
      .cache
      .fetch(
        ["v1", self.class.name.to_s, :cache_find_out_total_images],
        expires_in: 1.hour
      ) { find_out_total_images }
  end

  private

  def merge_username
    self.username = "#{first_name}#{last_name}"
  end

  def check_if_password_confirmation?
    if !(password === password_confirmation)
      return(
        errors[:password_confirmation].push("Invalid password confirmation")
      )
    end
  end
end
