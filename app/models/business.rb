# frozen_string_literal: true

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
#  city                   :string           not null
#  latitude               :decimal(, )
#  longitude              :decimal(, )
#  categorie_name         :string
#  owner                  :string
#  specialties            :string
#  history                :string
#  about_me               :string
#
class Business < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable,
         :registerable,
         :recoverable,
         :rememberable,
         :validatable,
         :trackable,
         :jwt_authenticatable,
         jwt_revocation_strategy: JwtDenylist
  geocoded_by :full_address
  after_validation :geocode
  after_save :perform_caching_job
  validates :name,
            presence: true,
            length: {
              in: 6..50
            },
            uniqueness: true,
            format: {
              with: /(?:\s*[a-zA-Z0-9,_.\077\0100*+&\#'~;\-!@;]{2,}\s*)*/,
              message: "not valid business name"
            }
  validates :email, presence: true, uniqueness: { case_sensitive: true }
  validates :description,
            presence: true,
            length: {
              minimum: 20,
              too_short: "too short",
              maximum: 255,
              too_long: "too long"
            }
  validates :address, presence: true
  validates :city, presence: true
  validates :country, presence: true
  validates :state, presence: true
  validates :phone_number,
            presence: true,
            length: {
              in: 10..20
            },
            uniqueness: true,
            format: {
              with: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
              message: "not valid",
              multiline: true
            }
  validates :web_address,
            uniqueness: true,
            format: {
              with: URI::DEFAULT_PARSER.make_regexp(%w[http https]),
              message: "are not accessible"
            },
            if: -> { !self.web_address.blank? }
  validates :hours_of_opening, numericality: true, presence: true
  validates :min_price, presence: true, numericality: true
  validates :max_price, presence: true, numericality: true

  has_many_attached :images
  has_many :images_uploaded_by_user,
           class_name: "Image",
           primary_key: :id,
           foreign_key: :business_id
  has_one_attached :avatar
  has_one :community
  has_many :community_questions,
           class_name: "Question",
           primary_key: :id,
           foreign_key: :business_id
  has_many :answers,
           class_name: "Answer",
           primary_key: :id,
           foreign_key: :business_id
  has_many :menus
  has_many :drafts
  has_many :user_drafts, class_name: "Draft"
  has_many :reviews
  has_many :user_reviews, through: :reviews, source: :user
  has_many :shares
  has_many :notifies
  has_many :notify_answers
  has_one :working_hour
  has_one :amenty
  has_one :price,
          class_name: "Price",
          primary_key: :id,
          foreign_key: :businesses_id,
          touch: true
  has_one :categorie, touch: true

  after_create :create_price_point
  after_create :create_categorie_point
  after_create :create_community

  scope :filter_by_category,
        ->(category) { where("lower(categorie_name) LIKE ?", "%#{category}%") }
  scope :filter_by_country,
        ->(country) { where("lower(country) LIKE ?", country) }
  scope :filter_by_state, ->(state) { where("lower(state) LIKE ?", state) }
  scope :filter_by_name, ->(name) { where("lower(name) LIKE ?", "%#{name}%") }

  def self.filter_by_latest_cached
    Rails
      .cache
      .fetch([:v1, self, :filter_by_latest_cached], expires_in: 24.hours) do
        filter_by_latest
      end
  end

  def check_for_web_address
    regex_check_host =
      /^(([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9\-]*[A-Za-z0-9])$/
    uri = URI.parse(web_address)
    #  check schema
    if uri.port == 443 || uri.port == 80
      if uri.hostname.match(regex_check_host)
        return true if uri.scheme == "https"
        return errors.add(:scheme_incorrect, "Invalid schema, required https")
      end
      return errors.add(:host_incorrct, "Invalid host")
    end
    return errors.add(:port_incorrect, "Invalid address")
  end

  def get_average_amout_by_dollar_sign
    price.dollar_signs
  end

  def full_address
    ["TN 37086, United States"].compact.join(", ")
  end

  def location
    ["#{state}, #{country}"].compact.join(", ")
  end

  def self.search_by_category(category)
    Business.filter_by_category(category)
  end

  def self.search_by_category_and_country(category, country)
    Business.filter_by_category(category).filter_by_country(country)
  end

  def self.search_by_category_and_country_and_state(category, country, _state)
    Business.filter_by_category(category).filter_by_country(country)
  end

  private

  def create_community
    Community.create(business: self)
  end

  def create_price_point
    if (!min_price.nil? && !max_price.nil?) &&
         (min_price != 0 && max_price != 0)
      Price.create(
        min_price: min_price,
        max_price: max_price,
        businesses_id: id
      )
    end
  end

  def create_categorie_point
    unless categorie_name.nil? && categorie_name.empty?
      categorie = Categorie.new(name: categorie_name, business: self)
      categorie.save
    end
    self
  end

  def self.filter_by_latest
    where("created_at < ?", 1.days.ago)
      .where("web_address != ?", "")
      .limit(15)
      .includes(:price)
      .with_attached_images
  end
end
