class AddMinPriceAndMaxPriceToBusineses < ActiveRecord::Migration[7.0]
  def change
    add_column :businesses, :min_price,:decimal, :precision => 8, :scale => 2, :null => false
    add_column :businesses, :max_price,:decimal, :precision => 8, :scale => 2, :null => false
  end
end
