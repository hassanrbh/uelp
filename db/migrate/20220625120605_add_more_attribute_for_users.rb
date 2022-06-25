class AddMoreAttributeForUsers < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :zip_code, :integer, :null => false
    add_column :users, :birth_date, :datetime
    add_column :users, :gender, :integer, :null => false
    add_column :users, :phone_number, :string, :null => false
  end
end
