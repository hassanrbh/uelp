# frozen_string_literal: true

class CreateCategories < ActiveRecord::Migration[7.0]
  def change
    create_table :categories do |t|
      t.string :name, null: false
      t.references :business, null: false
      t.timestamps
    end
    add_index :categories, :name
  end
end
