class Api::V1::HelpFulsController < ApplicationController
  def index
    @answer = Answer.find_by_answer(params[:answer_slug])

    @help_fuls = HelpFul.sum_indicators(@answer)

    render json: { counter: @help_fuls.sum }
  end

  def helpful
    
  end

  def unhelpful
  end

  private

  def help_fuls_params
    params.require(:help_fuls).permit(:indicator)
  end
end
