class Api::V1::ReportsController < ApplicationController
  def create
    @answer = Answer.find_by_answer(params[:answer_id])
    @malicious_user = @answer.user

    begin
      if (
           (@answer.present? && !@answer.nil?) &&
             (@malicious_user.present? && !@malicious_user.nil?)
         )
        @report = Report.new(reports_params)
        @report.user = current_user
        @report.malicious_user = @malicious_user
        @report.answer = @answer

        if (@report.save)
          return render json: { message: "report created" }, status: :created
        end

        return render json: @report.errors.full_messages, status: 403
      end

      return render json: { message: "Error Occured" }, status: :not_found
    rescue ActiveRecord::RecordNotUnique
      return render json: { message: "already reported" }, status: 403
    end
  end

  private

  def reports_params
    params.require(:reports).permit(:report_content, :more_details)
  end
end
