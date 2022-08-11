class NewstVersionOfTheLatest < ActiveRecord::Migration[7.0]
  def change
    add_column :reports, :more_details, :string
    add_column :reports, :answer_id, :bigint, null: false
    add_index :reports, :answer_id
    # add_index :reports,
    #           %i[user_id report_content, more_details, malicious_user],
    #           unique: true,
    #           name: "avoid_repeated_reports"
  end
end
