class Api::V1::CurrentBizController < ApplicationController
  def index
    render json: current_business, :status => :ok
  end
end
