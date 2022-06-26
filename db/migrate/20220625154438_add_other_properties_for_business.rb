class AddOtherPropertiesForBusiness < ActiveRecord::Migration[7.0]
  def change
    add_column :businesses, :name, :string,:null => false,:unique => false
    add_column :businesses, :description, :text, :null => false
    add_column :businesses, :address, :string, :null => false, :unique => true
    add_column :businesses, :address_1, :string
    add_column :businesses, :address_2, :string
    add_column :businesses, :zip_code, :integer, :null => false
    add_column :businesses, :state, :string, :null => false, :length => 2
    add_column :businesses, :country, :string, :null => false
    add_column :businesses, :phone_number, :string, :null => false, :unique => true
    add_column :businesses, :web_address, :string
    add_column :businesses, :menu_web_address, :string
    add_column :businesses, :hours_of_opening, :integer, :null => false
  end
end
