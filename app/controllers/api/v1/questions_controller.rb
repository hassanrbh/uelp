class Api::V1::QuestionsController < ApplicationController
  before_action :authenticate_user!

  def index

  end

  def create
    @business = Business.find_by_name(params[:business_slug])
    @question = @business.community.questions.new(questions_params)
    @question.user = current_user

    if (@question.save)
      BusinessMailer.notify_business_owner(@business).deliver_now
      BusinessMailer.notify_user_questioner(current_user).deliver_now

      return render :json => {
        :question => @question.question,
        :success => "Question Save, Community Is Happy"
      }
    end

    return render :json => {
      :errors => @question.errors.full_messages
    }
  end

  def questions_params
    params.require(:question).permit(:question)
  end

end
