json.(@menu, :name, :ingredients, :price)
json.images do
  json.first cloudinary_url(@menu.images[0])
end