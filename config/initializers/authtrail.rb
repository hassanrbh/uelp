# set to true for geocoding (and add the geocoder gem to your Gemfile)
# we recommend configuring local geocoding as well
# see https://github.com/ankane/authtrail#geocoding
AuthTrail.geocode = true
AuthTrail.job_queue = :low_priority


AuthTrail.transform_method = lambda do |data, request|
  data[:user] ||= User.find_by(email: data[:identity])
end

# exclude certain attempts from tracking
# AuthTrail.exclude_method = lambda do |data|
#   data[:identity] == "capybara@example.org"
# end
