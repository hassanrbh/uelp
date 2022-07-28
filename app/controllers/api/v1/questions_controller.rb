class Api::V1::QuestionsController < ApplicationController
  before_action :authenticate_user!

  def index

  end

  def create
    @business = Business.find_by_name(:business_slug)
    @question = @business.community.questions.new(question_params)
    if (@question.save)
      
    end
    
  end

  def questions_params
    params.require(:question).permit(:question)
  end

end
