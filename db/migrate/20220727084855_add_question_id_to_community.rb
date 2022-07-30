# frozen_string_literal: true

class AddQuestionIdToCommunity < ActiveRecord::Migration[7.0]
  def change
    add_column :communities, :question_id, :integer
  end
end
