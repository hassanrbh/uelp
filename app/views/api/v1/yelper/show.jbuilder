# frozen_string_literal: true

json.call(@yelper, :first_name, :last_name, :username, :zip_code, :birth_date, :gender, :phone_number)
json.activities do
  json.last_sign_in_at @yelper.last_sign_in_at
  json.sign_in_count @yelper.sign_in_count
end
json.avatar cloudinary_url(@yelper.avatar.key)  if @yelper.avatar.attached?
json.address @yelper.full_address
