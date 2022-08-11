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
#  more_details   :string
#
class Report < ApplicationRecord
  belongs_to :user, class_name: "User", foreign_key: :user_id
  belongs_to :malicious_user, class_name: "User", foreign_key: :malicious_id
  belongs_to :answer, class_name: "Answer", foreign_key: :answer_id

  validates :report_content, presence: true
end
