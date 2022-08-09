json.ignore_nil?

json.(@newest_first_answers) do |answer|
  @writer = answer.user
  json.answer answer.answer
  json.created_at time_ago_in_words(answer.created_at)

  json.writer do
    json.username @writer.username
    json.avatar cloudinary_url(@writer.avatar.key)
    json.business_images @writer.cache_find_out_total_images
    json.friends 2
    json.reviews 23
  end
end
