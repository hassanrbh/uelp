# frozen_string_literal: true

class CreateAnswers < ActiveRecord::Migration[7.0]
  def change
    create_table :answers do |t|
      t.string :answer, null: false, unique: true
      t.belongs_to :user
      t.belongs_to :question
      t.belongs_to :community

      t.timestamps
    end
    add_index :answers, %i[answer user_id], unique: true
    add_index :answers, %i[answer question_id], unique: true
    add_index :answers, %i[answer user_id question_id], unique: true
  end
end
