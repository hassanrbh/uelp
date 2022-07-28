json.questions(@questions) do |question|
  @questioner = question.user

  json.extract! question,:question
  json.questioner do
    json.username @questioner.username
    json.avatar cloudinary_url(@questioner.avatar.key)
    
  end
end