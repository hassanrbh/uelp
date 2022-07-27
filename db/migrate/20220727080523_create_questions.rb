class CreateQuestions < ActiveRecord::Migration[7.0]
  def change
    create_table :questions do |t|
      t.belongs_to :community
      t.string :question , null: false
      t.timestamps
    end
  end
end
