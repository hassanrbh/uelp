# frozen_string_literal: true

json.id current_user.id
json.email current_user.email
json.username current_user.username
json.avatar cloudinary_url(current_user.avatar.key)
json.address current_user.full_address
json.zip_code current_user.zip_code
json.birth_date current_user.birth_date
json.gender current_user.gender
json.first_name current_user.first_name
json.last_name current_user.last_name
json.phone_number current_user.phone_number
