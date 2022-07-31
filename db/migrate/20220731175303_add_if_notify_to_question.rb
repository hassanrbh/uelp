class AddIfNotifyToQuestion < ActiveRecord::Migration[7.0]
  def change
    add_column :questions, :notify_me,:boolean, :default => false
  end
end
