# 15.times do |i|
#   business = Business.new(
#     :email => Faker::Internet.email,
#     :name => Faker::Company.name,
#     :password => "password123",
#     :password_confirmation => "password123",
#     :description => Faker::Lorem.paragraph_by_chars(number: 50, supplemental: false),
#     :address => Faker::Address.street_address,
#     :address_1 => Faker::Address.secondary_address,
#     :zip_code => Faker::Address.zip_code,
#     :state => Faker::Address.state,
#     :country => Faker::Address.country,
#     :phone_number => Faker::PhoneNumber.cell_phone,
#     :hours_of_opening => rand(100),
#     :min_price => rand(1000),
#     :max_price => rand(1000),
#     :city => Faker::Address.city,
#     :categorie_name => "Delivery",
#     :web_address => Faker::Internet.url(host: `faker`, path: "fake_test_path_#{i+1}", scheme: 'https')
#   )

#   business.images.attach(io: File.open(Rails.root.join("db", "sample", "images", "business_#{i + 1}.jpg")), filename: business.name)
#   business.save!
# end

# 10.times do |i|
#   menu = Menu.new(
#     :name => Faker::Restaurant.name,
#     :ingredients => Faker::Restaurant.description,
#     :price => rand(100),
#     :business_id => 81
#   )
#   menu.images.attach(io: File.open(Rails.root.join("db", "sample", "dishes", "dishe_#{i + 1}.jpg")), filename: menu.name)
#   menu.save!
# end

# 1.times do
#   working_hour = WorkingHour.new(
#     :business_id => 81,
#     :working_hours => {
#       "Mon"=>["10.00", "11.00"], 
#       "Tue"=>["10.00", "11.00"], 
#       "Wed"=>["10.00", "11.00"], 
#       "Thu"=>["10.00", "11.00"], 
#       "Fri"=>["12.00", "11.00"], 
#       "Sat"=>["11.00", "10.00"], 
#       "Sun"=>["11.00", "12.00"]}
#   )

#   working_hour.save!
# end

1.times do
  amenty = Amenty.new(
    :business_id => 81,
    offers_delivery: true,
    offers_takeout: true,
    vegan_options: true,
    accept_credit_cards: true,
    casual: true,
    offers_catering: true,
    tv: true,
    private_lot_parking: true,
    good_for_lunch: true,
    free_wifi: true,
    wheelchar_accessible: true,
    gendar_neutral_rooms: true,
    good_for_lunch_and_dinner: true,
    many_vegeterian_options: true,
    good_for_groups: true,
    moderate_noise: true,
    :reservations => false,
    :accept_apple_payment => false,
    :outdoor_seating => false,
    :happy_hour => false,
    :drive_thru => false,
    :bike_parking => false,
    :waiting_service => false,
    :alcohol => false,
    :dogs_not_allowed => false,
  )

  amenty.save!
end