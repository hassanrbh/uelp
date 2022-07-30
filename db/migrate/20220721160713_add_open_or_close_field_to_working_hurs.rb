# frozen_string_literal: true

class AddOpenOrCloseFieldToWorkingHurs < ActiveRecord::Migration[7.0]
  def change
    add_column :working_hours, :status, :string
  end
end
