json.(@menu, :name, :ingredients, :price)
json.images do
  json.first rails_blob_url(@menu.images[0])
end