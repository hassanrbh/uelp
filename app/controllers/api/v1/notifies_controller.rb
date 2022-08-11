class Api::V1::NotifiesController < ApplicationController
  before_action :authenticate_user!

  def index
    @count = NotifyAnswer.count_cache(current_user)
    render json: { count: @count }, status: :ok
  end
end
