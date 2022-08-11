class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.belongs_to :user
      t.belongs_to :business
      t.integer :rating, null: false
      t.text :description, null: false

      t.timestamps
    end
    add_index :reviews, :rating
    add_index :reviews, :description
  end
end
