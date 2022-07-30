# frozen_string_literal: true

class CreateImages < ActiveRecord::Migration[7.0]
  def change
    create_table :images do |t|
      t.belongs_to :user
      t.belongs_to :business

      t.timestamps
    end
  end
end
