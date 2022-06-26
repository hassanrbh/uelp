2.times do
  business = Business.new(
    :email => Faker::Internet.email,
    :name => Faker::Company.name,
    :password => "password123",
    :password_confirmation => "password123",
    :description => Faker::Lorem.unique,
    :address => Faker::Address.street_address,
    :address_1 => Faker::Address.secondary_address,
    :zip_code => Faker::Address.zip_code,
    :state => Faker::Address.state,
    :country => Faker::Address.country,
    :phone_number => Faker::PhoneNumber.phone_number,
    :hours_of_opening => rand(100),
    :min_price => rand(1000),
    :max_price => rand(1000)
  )
  business.save!
end