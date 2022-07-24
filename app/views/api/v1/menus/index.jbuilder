json.ignore_nil!

json.menus(@menus) do |menu|
  json.cache! ["v1", menu.name], expires_in: 60.minutes  do
    json.(menu, :name, :ingredients, :price)
    json.images do
      json.first cloudinary_url(menu.images[0])
    end
  end
end