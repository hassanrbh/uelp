json.ignore_nil?

json.questions(@questions) do |question|
  @questioner = question.user

  json.extract! question,:question
  json.questioner do
    json.username @questioner.username
    json.avatar cloudinary_url(@questioner.avatar.key)
    json.business_images @questioner.cache_find_out_total_images
  end
  json.created_at time_ago_in_words(question.created_at)
end