class CreateCommunities < ActiveRecord::Migration[7.0]
  def change
    create_table :communities do |t|
      t.belongs_to :business      
      t.timestamps
    end
  end
end
