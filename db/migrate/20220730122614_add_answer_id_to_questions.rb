class AddAnswerIdToQuestions < ActiveRecord::Migration[7.0]
  def change
    add_column :questions, :answer_id, :integer
    add_index :questions, :answer_id
  end
end
