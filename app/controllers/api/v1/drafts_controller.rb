class Api::V1::DraftsController < ApplicationController
  def index
    @business = Business.find_by_name(params[:business_slug])
    @drafts = current_user.drafts.where(business: @business)

    return render :index, status: :ok
    # return render json: ["nothing to show here"], status: 404
  end

  def create
    @business = Business.find_by_name(params[:business_slug])
    @draft = current_user.drafts.new(drafts_params)
    @draft.business = @business

    return render json: @draft, status: :ok if (@draft.save)
    return render json: @draft.errors.full_messages
  end

  def destroy
    @draft = Draft.find(params[:id])
    @draft.destroy!
  end

  private

  def drafts_params
    params.require(:drafts).permit(:rating)
  end
end
