json.ignore_nil?

json.drafts(@drafts) do |draft|
  json.id draft.id
  json.rating draft.rating
  json.created_at draft.created_at.to_date.strftime("%Y/%m/%d")
end
