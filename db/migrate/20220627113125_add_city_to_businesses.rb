class AddCityToBusinesses < ActiveRecord::Migration[7.0]
  def change
    add_column :businesses, :city, :string, null: false
  end
end
