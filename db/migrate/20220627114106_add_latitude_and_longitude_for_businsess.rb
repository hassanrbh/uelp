# frozen_string_literal: true

class AddLatitudeAndLongitudeForBusinsess < ActiveRecord::Migration[7.0]
  def change
    add_column :businesses, :latitude, :decimal
    add_column :businesses, :longitude, :decimal
  end
end
