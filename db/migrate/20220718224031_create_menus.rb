class CreateMenus < ActiveRecord::Migration[7.0]
  def change
    create_table :menus do |t|
      t.string :name, :null => false
      t.string :ingredients, :null => false
      t.integer :price, :null => false, :default => 0
      t.integer :business_id, :null => false
      
      t.timestamps
    end
  end
end
