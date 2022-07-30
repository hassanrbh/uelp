# frozen_string_literal: true

class CreatePrices < ActiveRecord::Migration[7.0]
  def change
    create_table :prices do |t|
      t.decimal :min_price, precision: 8, scale: 2, null: false
      t.decimal :max_price, precision: 8, scale: 2, null: false
      t.integer :average, null: false
      t.string :dollar_signs, null: false

      t.references :businesses, index: true
      t.timestamps
    end
  end
end
