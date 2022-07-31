class Api::V1::NotifiesController < ApplicationController
  before_action :authenticate_user!

  def index
    render json: { error: ["noting here for a while :("] }, status: 302
  end
end
