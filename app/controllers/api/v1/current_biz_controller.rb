class Api::V1::CurrentBizController < ApplicationController
  before_action :authenticate_business!
  def index
    render :index, :status => :ok
  end
end
