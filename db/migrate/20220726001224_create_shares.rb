# frozen_string_literal: true

class CreateShares < ActiveRecord::Migration[7.0]
  def change
    create_table :shares do |t|
      t.belongs_to :user
      t.string :to, null: false, unique: true
      t.string :note, null: false
      t.belongs_to :business

      t.timestamps
    end
  end
end
