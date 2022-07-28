class Api::V1::QuestionsController < ApplicationController
  before_action :authenticate_user!

  def index
    @business = Business.find_by_name(params[:business_slug])
    @questions = @business.community_questions

    if (@questions.count >= 1)
      return render :index, :status => :ok
    end

    render :json => {
      :messg => "Yelp users haven’t asked any questions yet about #{@business.name}."
    }

  end

  def create
    @business = Business.find_by_name(params[:business_slug])
    @question = @business.community.questions.new(questions_params)
    @question.user = current_user

    if (@question.save)
      BusinessMailer.notify_business_owner(@business).deliver_now
      BusinessMailer.notify_user_questioner(current_user).deliver_now

      return render :json => {
        :success => "Question Save, Community Is Happy"
      }, :status => :ok

    end

    return render :error, :status => :not_found
  end

  def questions_params
    params.require(:question).permit(:question)
  end

end
