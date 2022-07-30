class RemoveQuestionIdFromCommunity < ActiveRecord::Migration[7.0]
  def change
    remove_column :communities, :question_id
  end
end
