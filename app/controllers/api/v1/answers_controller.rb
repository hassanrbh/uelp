# frozen_string_literal: true

module Api
  module V1
    class AnswersController < ApplicationController
      before_action :authenticate_user!

      def index
        @answers = Answer.where(question: params[:question_id])

        render json: @answers, status: :ok
      end

      def show
        @answer = Answer.find_by_answer(params[:id])
        return render json: @answer, status: :ok if (!@answer.nil?)
        return render json: { error: ["An error occurred"] }
      end

      def create
        @question = Question.find(params[:question_id])
        @business = Business.find_by_name(params[:business_slug])
        @answer = current_user.answers.new(answers_params)
        @answer.question = @question
        @answer.business = @business
        @answer.community = @business.community

        if (@answer.save)
          if (@question.notify_me)
            @notification =
              NotifyAnswer.new(
                question: @question,
                answer: @answer,
                business: @business,
                user: current_user,
                notifyer_id: @question.user.id
              )
            if (@notification.save)
              ActionCable.server.broadcast "NotificationsChannel",
                                          {
                                            count:
                                              NotifyAnswer.where(
                                                user_id: current_user.id
                                              ).count
                                          }
              return render json: { success: ["answered correctly"] }
            end
          end
        end

        return render json: @answer.errors.full_messages
      end

      private

      def answers_params
        params.require(:answer).permit(:answer)
      end
    end
  end
end
