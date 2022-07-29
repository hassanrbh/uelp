class Api::V1::QuestionsController < ApplicationController
  before_action :authenticate_user!

  def index
    sort_by = params[:sort_by]
    page = params[:page]
    limit = params[:limit]
    @business = Business.find_by_name(params[:business_slug])
    @questions = @business.community_questions

    if ((sort_by.present?) && !!(sort_by =~ /.*(popular|Popular|most_answered|newest_questions).*/))
      if !!(sort_by =~ /.*(popular|Popular).*/)
        return sort_by_popular(page)
      elsif !!(sort_by =~ /.*(most_answered).*/)
        return sort_by_most_answered_question(page)
      else
        return sort_by_newest_questions(page)
      end
    end

    if (limit.present? && Integer(limit) <= 2)
      @questions = @questions.limit(2)
      return render :index, :status => :ok
    elsif limit.present?
      return render :json => { :limit => ["too many requests"]}
    end

    if (@questions.count >= 1)
      return render :index, :status => :ok
    end

    return render :json => {
      :mesg => "Yelp users haven't asked any questions yet about #{@business.name}."
    }

  end

  def random_questions_to_answer
    @business = Business.find_by_name(params[:business_slug])
    @questions = Question.random_questions_unanswered(@business)
    
    render :index, status: :ok
  end

  def sort_by_popular(page)
    @business = Business.find_by_name(params[:business_slug])
    @questions = Question.sort_by_popular(@business).paginate(page: page, per_page: 5)

    render :index, status: :ok
  end

  def sort_by_newest_questions(page)
    @business = Business.find_by_name(params[:business_slug])
    @questions = Question.sort_by_newest_questions(@business).paginate(page: page, per_page: 5)

    render :index, status: :ok
  end

  def sort_by_most_answered_question(page)
    @business = Business.find_by_name(params[:business_slug])
    @questions = Question.sort_by_most_answered_question(@business).paginate(page: page, per_page: 5)
    
    render :index, status: :ok
  end

  def create
    @business = Business.find_by_name(params[:business_slug])
    @question = @business.community.questions.new(questions_params)
    @question.user = current_user
    @question.business = @business

    begin
      if (@question.save)
        BusinessMailer.notify_business_owner(current_user,@business, @question).deliver_now
        BusinessMailer.notify_user_questioner(current_user, @business).deliver_now

        return render :json => {
          :success => "Question Save, Community Is Happy"
        }, :status => :ok
      end
    rescue ActiveRecord::RecordNotUnique
      question = Question.where(:question => params[:question][:question])
      return render :json => {
        :error => ["Question Already Exists"],
        :question => question
      }
    end
    return render :error, :status => :not_found
  end

  def questions_params
    params.require(:question).permit(:question)
  end

end
