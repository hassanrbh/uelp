# frozen_string_literal: true

class AddAccountActiveToUsers < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :account_active, :boolean, default: true
  end
end
