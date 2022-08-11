class AddingAFieldMoreToReports < ActiveRecord::Migration[7.0]
  def change
    add_column :reports, :more_details, :string
  end
end
