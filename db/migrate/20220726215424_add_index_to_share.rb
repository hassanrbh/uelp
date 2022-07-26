class AddIndexToShare < ActiveRecord::Migration[7.0]
  def change
    add_index :shares, [:to, :user_id, :note], unique: true
  end
end
