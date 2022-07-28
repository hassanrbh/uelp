class AddBusinessIdToQuestionAndAnswers < ActiveRecord::Migration[7.0]
  def change
    add_column :questions, :business_id, :integer
    add_column :answers, :business_id, :integer
    add_index :answers, :business_id
    add_index :questions, :business_id
  end
end
