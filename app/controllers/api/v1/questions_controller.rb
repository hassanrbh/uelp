# frozen_string_literal: true

module Api
  module V1
    class QuestionsController < ApplicationController
      before_action :authenticate_user!

      def index
        sort_by = params[:sort_by]
        page = params[:page]
        limit = params[:limit]
        @business = Business.find_by_name(params[:business_slug])
        @questions = @business.community_questions

        if sort_by.present? &&
            !(
              sort_by =~ /.*(popular|Popular|most_answered|Newest First).*/
            ).nil?
          if !(sort_by =~ /.*(popular|Popular).*/).nil?
            return sort_by_popular(page)
          elsif !(sort_by =~ /.*(most_answered).*/).nil?
            return sort_by_most_answered_question(page)
          else
            return sort_by_newest_questions(page)
          end
        end

        if limit.present? && Integer(limit) <= 2
          @questions = @questions.offset(2).limit(limit)
          return render :index, status: :ok
        elsif limit.present?
          return render json: { limit: ["too many requests"] }, status: 403
        end

        return render :index, status: :ok if @questions.count >= 1

        render json: {
                mesg:
                  "Yelp users haven't asked any questions yet about #{@business.name}."
              }, status: :not_found
      end

      def show
        @question = Question.find_by_id(params[:id])
        return render :show, status: :ok if (!@question.nil?)
        return render json: { error: ["question not Exists?"] }
      end

      def create
        @business = Business.find_by_name(params[:business_slug])
        @question = @business.community.questions.new(questions_params)
        @question.user = current_user
        @question.business = @business

        begin
          if @question.save
            BusinessMailer.notify_business_owner(
              current_user,
              @business,
              @question
            ).deliver_now
            BusinessMailer.notify_user_questioner(
              current_user,
              @business
            ).deliver_now

            ## if the notify is active send a notification to the owner of the business
            if (@question.notify_me)
              @notify =
                current_user.notifies.create(
                  question: @question,
                  business: @question.business
                )

              return(
                render json: {
                        success:
                          "Great! We'll let you know as soon as there is a new answer to this question."
                      },
                      status: :ok
              )
            end

            return(
              render json: {
                      success: "Question Save, Community Is Happy"
                    },
                    status: :ok
            )
          end
        rescue ActiveRecord::RecordNotUnique
          question = Question.where(question: params[:question][:question])
          return(
            render json: {
                    error: ["Question Already Exists"],
                    question: question
                  },
                  status: 400
          )
        end
        render :error, status: 400
      end

      def random_questions_to_answer
        @total_entries = Question.count % 10
        @business = Business.find_by_name(params[:business_slug])
        @questions = Question.random_questions_unanswered(@business)

        render :index, status: :ok
      end

      def sort_by_popular(page)
        @total_entries = Question.count % 10
        @business = Business.find_by_name(params[:business_slug])
        @questions =
          Question.sort_by_popular(@business).paginate(page: page, per_page: 10)

        render :index, status: :ok
      end

      def sort_by_newest_questions(page)
        @total_entries = Question.count % 10
        @business = Business.find_by_name(params[:business_slug])
        @questions =
          Question.sort_by_newest_questions(@business).paginate(
            page: page,
            per_page: 10
          )

        render :index, status: :ok
      end

      def sort_by_most_answered_question(page)
        @total_entries = Question.count % 10
        @business = Business.find_by_name(params[:business_slug])
        @questions =
          Question.sort_by_most_answered_question(@business).paginate(
            page: page,
            per_page: 10
          )

        render :index, status: :ok
      end

      def questions_params
        params.require(:question).permit(:question, :notify_me)
      end
    end
  end
end
