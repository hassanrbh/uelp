# frozen_string_literal: true

json.errors do
  json.status 401
  json.message @errors
end
