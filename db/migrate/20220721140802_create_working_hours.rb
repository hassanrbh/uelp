class CreateWorkingHours < ActiveRecord::Migration[7.0]
  def change
    create_table :working_hours do |t|
      t.integer :business_id, :null => false
      t.json :working_hours, default: {}, :null => false
      t.timestamps
    end
    add_index :working_hours, :business_id
  end
end
