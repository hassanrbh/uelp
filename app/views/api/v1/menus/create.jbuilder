# frozen_string_literal: true

json.call(@menu, :name, :ingredients, :price)
json.images do
  json.first cloudinary_url(@menu.images[0].key)
end
