class CreateNotifies < ActiveRecord::Migration[7.0]
  def change
    create_table :notifies do |t|
      t.belongs_to :business
      t.belongs_to :question
      t.belongs_to :user

      t.timestamps
    end
    add_index :notifies, [:question_id, :user_id], unique: true
  end
end

