class Addhelpfulscounttoanswers < ActiveRecord::Migration[7.0]
  def change
    add_column :answers, :help_fuls_count, :integer, null: false, default: 0
  end
end
