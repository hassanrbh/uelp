# frozen_string_literal: true

class AddAddressToUsers < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :full_address, :string
  end
end
