json.id current_user.id
json.email current_user.email
json.username current_user.username
json.avatar rails_blob_url(current_user.avatar)
json.zip_code current_user.zip_code
json.birth_date current_user.birth_date
json.gender current_user.gender
json.phone_number current_user.phone_number