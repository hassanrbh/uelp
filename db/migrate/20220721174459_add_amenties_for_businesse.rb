class AddAmentiesForBusinesse < ActiveRecord::Migration[7.0]
  def change
    add_column :businesses, :amenties, :text
  end
end
