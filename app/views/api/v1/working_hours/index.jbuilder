json.ignore_nil!

json.cache! ["v1", @working_hours], expires_in: 24.hours do
  json.extract!(@working_hours, :working_hours)
end