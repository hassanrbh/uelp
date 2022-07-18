15.times do |i|
  business = Business.new(
    :email => Faker::Internet.email,
    :name => Faker::Company.name,
    :password => "password123",
    :password_confirmation => "password123",
    :description => Faker::Lorem.paragraph_by_chars(number: 50, supplemental: false),
    :address => Faker::Address.street_address,
    :address_1 => Faker::Address.secondary_address,
    :zip_code => Faker::Address.zip_code,
    :state => Faker::Address.state,
    :country => Faker::Address.country,
    :phone_number => Faker::PhoneNumber.cell_phone,
    :hours_of_opening => rand(100),
    :min_price => rand(1000),
    :max_price => rand(1000),
    :city => Faker::Address.city,
    :categorie_name => "Delivery",
    :web_address => Faker::Internet.url(host: `faker`, path: "fake_test_path_#{i+1}", scheme: 'https')
  )

  business.images.attach(io: File.open(Rails.root.join("db", "sample", "images", "business_#{i + 1}.jpg")), filename: business.name)
  business.save!
end