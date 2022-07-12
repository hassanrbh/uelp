json.ignore_nil!
json.profile do
  json.private_details do
    json.id @business.id
    json.name @business.name
    json.description @business.description
    json.phone_number @business.phone_number
  end
  json.business_details do
    json.address @business.address
    json.address_1 @business.address_1
    json.address_2 @business.address_2
    json.city @business.city
    json.country @business.country
    json.state @business.state
  end
  json.additional_info do
    json.web_address @business.web_address
    json.hours_of_opening @business.hours_of_opening
    json.menu_web_address @business.menu_web_address
  end
  json.price_info do
    json.average @business.get_average_amout_by_dollar_sign
  end
  json.coords_details do
    json.full_address @business.full_address
    json.latitude @business.latitude
    json.longitude @business.longitude
  end
  json.categories do
    json.category @business.categorie_name
  end
  json.images do
    json.images @business.images.map{|img| (rails_blob_url(img) )}
  end
end