json.ignore_nil!

json.menus(@menus) do |menu|
  json.(menu, :name, :ingredients, :price)
end