# frozen_string_literal: true

class AddIndexToBusinessesName < ActiveRecord::Migration[7.0]
  def change
    add_index :businesses, :name
  end
end
