json.questions(@questions) do |question|
  @questioner = question.user

  json.extract! question,:question
  json.questioner do
    json.username @questioner.username
    json.avatar cloudinary_url(@questioner.avatar.key)
    json.
    json.business_images @questioner.business_images.count
  end
  json.created_at time_ago_in_words(question.created_at)
end