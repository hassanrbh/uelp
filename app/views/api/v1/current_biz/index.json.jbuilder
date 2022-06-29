json.ignore_nil!
json.current_business do
  json.private_details do
    json.id current_business.id
    json.email current_business.email
    json.name current_business.name
    json.description current_business.description
    json.phone_number current_business.phone_number
  end
  json.business_details do
    json.address current_business.address
    json.address_1 current_business.address_1
    json.address_2 current_business.address_2
    json.city current_business.city
    json.country current_business.country
    json.state current_business.state
  end
  json.additional_info do
    json.web_address current_business.web_address
    json.hours_of_opening current_business.hours_of_opening
    json.menu_web_address current_business.menu_web_address
  end
  json.price_info do
    json.average current_business.get_average_amout_by_dollar_sign
  end
  json.coords_details do
    json.full_address current_business.full_address
    json.latitude current_business.latitude
    json.longitude current_business.longitude
  end
end