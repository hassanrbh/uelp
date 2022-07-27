class AddingMoreFieldsToBusinesses < ActiveRecord::Migration[7.0]
  def change
    add_column :businesses,:specialties, :string
    add_column :businesses,:history, :string
    add_column :businesses, :about_me, :string
  end
end
