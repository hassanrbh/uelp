class CreateNotifyAnswers < ActiveRecord::Migration[7.0]
  def change
    create_table :notify_answers do |t|
      t.belongs_to :question
      t.belongs_to :answer
      t.belongs_to :business
      t.belongs_to :user
      t.timestamps
    end
    add_index :notify_answers, [:question_id, :answer_id], unique: true
    add_index :notify_answers, [:user_id, :answer_id,:question_id], unique: true
  end
end