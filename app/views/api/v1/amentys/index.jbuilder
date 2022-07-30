# frozen_string_literal: true

json.ignore_nil

json.cache! ['v1', self.class.name.to_s, @amenty.business_id] do
  json.extract!(@amenty, :amenties)
end
