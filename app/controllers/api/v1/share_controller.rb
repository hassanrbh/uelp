class Api::V1::ShareController < ApplicationController
  def create
    @share = Share.new(share_params)
    if (@share.save)
      UserMailer.share_note(current_user,@share.to,@share.note).deliver_now
      render :json => {
        :send => "success",
      }, :status => :ok
    else
      render json: @share.errors.full_messages, :status => 401
    end
  end

  def share_params
    params.require(:share).permit(:to, :note);
  end
end
