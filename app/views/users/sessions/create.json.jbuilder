# frozen_string_literal: true

json.current_user do
  json.id current_user.id
  json.email current_user.email
  json.username current_user.username
  json.zip_code current_user.zip_code
  json.birth_date current_user.birth_date
  json.gender current_user.gender
  json.phone_number current_user.phone_number
end
json.message do
  json.success 'Logged in sucessfully'
  json.code 200
end
