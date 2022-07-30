# frozen_string_literal: true

class AddIndexToQuestionsUnique < ActiveRecord::Migration[7.0]
  def change
    add_index :questions, %i[community_id question], unique: true
  end
end
