class Api::V1::NotifiesController < ApplicationController
  before_action :authenticate_user!

  def index
    @count = NotifyAnswer.where(user_id: current_user.id).count
    render json: { count: @count }, status: :ok
  end
end
