class AddIndexToShare < ActiveRecord::Migration[7.0]
  def change
    add_index :shares, [:to, :user_id], unique: true
  end
end
