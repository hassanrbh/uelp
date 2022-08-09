class CreateReports < ActiveRecord::Migration[7.0]
  def change
    create_table :reports do |t|
      t.belongs_to :user
      t.integer :malicious_id
      t.string :report_content, null: false

      t.timestamps
    end
    add_index :reports, :malicious_id
    add_index :reports, %i[user_id report_content malicious_id], unique: true
  end
end