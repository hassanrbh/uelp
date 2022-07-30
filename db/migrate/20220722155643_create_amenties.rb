# frozen_string_literal: true

class CreateAmenties < ActiveRecord::Migration[7.0]
  def change
    create_table :amenties do |t|
      t.belongs_to :business, dependent: :destroy
      t.text :amenties, null: false
      t.timestamps
    end
  end
end
