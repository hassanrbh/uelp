class AddIndexToQuestionsUnique < ActiveRecord::Migration[7.0]
  def change
    add_index :questions, [:community_id, :question], unique: true
  end
end
