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

  def check_if_business_open
    today_date = Date.today.strftime("%a");
    return if working_hours[today_date].length == 3
    working_hours.each do |key,value|
      if (today_date == key)
        if Time.now.strftime('%H').between?(value[0], value[1])
          self.working_hours[key].push("Opened Now")
        else 
          self.working_hours[key].push("Closed Now")
          self.save!
        end
      end
    end
  end
end
