class CreateHelpFuls < ActiveRecord::Migration[7.0]
  def change
    create_table :help_fuls do |t|
      t.belongs_to :user
      t.belongs_to :answer

      t.integer :indicator, null: false # this indicator is for knowing that you likes and unlikes
      t.timestamps
    end
  end
end