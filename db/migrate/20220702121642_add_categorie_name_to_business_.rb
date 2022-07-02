class AddCategorieNameToBusiness < ActiveRecord::Migration[7.0]
  def change
    add_column :businesses, :categorie_name, :string
  end
end
