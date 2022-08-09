class Api::V1::HelpFulsController < ApplicationController
  def index
    @help_fuls = []
    @answer = Answer.find_by_answer(params[:answer_id])

    HelpFul.where(answer: @answer).each { |help| @help_fuls << help.indicator }

    return render json: { counter: @help_fuls.sum } if !(@help_fuls.sum === -1)

    return render json: { counter: 0 }
  end

  def helpful
    simplify_helpfulls_shity_code(
      -1,
      "helpfuled",
      "you already liked this answer"
    )
  end

  def unhelpful
    simplify_helpfulls_shity_code(
      1,
      "unhelpfuled",
      "you already unliked this answer"
    )
  end

  def simplify_helpfulls_shity_code(indicator, status, error)
    if (params[:help_fuls][:indicator] === indicator)
      return(
        render json: {
                 error: ["you doing wierd stuff :) "]
               },
               status: :not_found
      )
    end

    begin
      @answer = Answer.find_by_answer(params[:answer_id])
      @help_ful = HelpFul.new(help_fuls_params)
      @help_ful.user = current_user
      @help_ful.answer = @answer

      @expected =
        HelpFul.where(answer: @answer, user: current_user, indicator: indicator)
      @expected.first.destroy if (@expected.count === 1)

      return render json: { created: status }, status: :ok if (@help_ful.save)
    rescue ActiveRecord::RecordNotUnique
      return(render json: { error: [error] }, status: 403)
    end
  end

  private

  def help_fuls_params
    params.require(:help_fuls).permit(:indicator)
  end
end
