class AddBusinessOwnerToBusinesses < ActiveRecord::Migration[7.0]
  def change
    add_column :businesses, :owner , :string
    add_index :businesses, :owner
  end
end
