# frozen_string_literal: true

json.ignore_nil!
json.all_businesses(@latest_businesses) do |business|
  json.cache! ['v1', business.name], expires_in: 30.minutes do
    json.profile do
      json.private_details do
        json.name business.name
        json.description business.description
        json.phone_number business.phone_number
        json.owner business.owner
      end
      json.owner do
        json.owner business.owner
        json.avatar cloudinary_url(business.avatar.key)
        json.about_me business.about_me
      end
      json.business_details do
        json.address business.address
        json.address_1 business.address_1
        json.address_2 business.address_2
        json.city business.city
        json.country business.country
        json.state business.state
      end
      json.additional_info do
        json.web_address business.web_address
        json.hours_of_opening business.hours_of_opening
        json.menu_web_address business.menu_web_address
        json.specialties business.specialties
        json.history business.history
      end
      json.price_info do
        json.average business.get_average_amout_by_dollar_sign
      end
      json.coords_details do
        json.full_address business.full_address
        json.latitude business.latitude
        json.longitude business.longitude
      end
      json.categories do
        json.category business.categorie_name
      end
      json.images do
        json.thumbnail cloudinary_url(business.images[0].key)
      end
    end
  end
end
