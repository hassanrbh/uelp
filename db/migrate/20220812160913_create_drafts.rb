class CreateDrafts < ActiveRecord::Migration[7.0]
  def change
    create_table :drafts do |t|
      t.belongs_to :user
      t.belongs_to :business

      t.integer :rating, null: false
      t.timestamps
    end
  end
end
