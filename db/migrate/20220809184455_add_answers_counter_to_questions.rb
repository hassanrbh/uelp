class AddAnswersCounterToQuestions < ActiveRecord::Migration[7.0]
  def change
    remove_column :questions, :answers_count
    add_column :questions, :answers_count, :integer, null: false, default: 0
  end
end
