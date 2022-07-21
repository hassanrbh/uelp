# == Schema Information
#
# Table name: working_hours
#
#  id            :bigint           not null, primary key
#  business_id   :integer          not null
#  working_hours :json             not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  status        :string
#
class WorkingHour < ApplicationRecord
  validates :working_hours, presence: true
  belongs_to :business
  before_update :check_if_business_open

  def check_if_business_open
    today_date = Date.today.strftime("%a");
    return if working_hours[today_date].length == 3
    working_hours.each do |key,value|
      if (Date.today.strftime("%a") == Time.now.strftime('%H'))
        if hour_date.between?(value[0], value[1])
          self.working_hours[key].push("Opened Now")
          self.save!
        else 
          self.working_hours[key].push("Closed Now")
          self.save!
        end
      end
    end
  end
end
