class AddAnswerToReports < ActiveRecord::Migration[7.0]
  def change
    add_column :reports, :answer_id, :bigint, :null => false
    add_index :reports, :answer_id
  end
end
