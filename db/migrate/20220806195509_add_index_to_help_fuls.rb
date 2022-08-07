class AddIndexToHelpFuls < ActiveRecord::Migration[7.0]
  def change
    add_index :help_fuls, [:user_id, :answer_id], unique: true
  end
end
