# frozen_string_literal: true

json.ignore_nil?

json.questions(@questions) do |question|
  @questioner = question.user

  json.extract! question, :question

  json.questioner do
    json.username @questioner.username
    json.avatar cloudinary_url(@questioner.avatar.key)
    json.business_images @questioner.cache_find_out_total_images
  end
  json.answers(question.answers) do |answer|
    @answerer = answer.user

    json.answer answer.answer
    json.answerer do
      json.username @answerer.username
      json.avatar cloudinary_url(@answerer.avatar.key)
      json.business_images @answerer.cache_find_out_total_images
    end
    json.created_at time_ago_in_words(answer.created_at)
  end

  json.created_at time_ago_in_words(question.created_at)
end
