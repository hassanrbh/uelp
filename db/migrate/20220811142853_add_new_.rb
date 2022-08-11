class AddNew < ActiveRecord::Migration[7.0]
  def change
    add_index :reports,
              %i[user_id report_content more_details malicious_id],
              unique: true,
              name: "avoid_repeated_reports"
  end
end
