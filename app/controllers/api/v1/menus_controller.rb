class Api::V1::MenusController < ApplicationController
  before_action :authenticate_user!
  respond_to :json

  def index
    @business = Business.find_by_name(params[:business_slug]);
    @menus = Menu.all.where(:business_id => @business.id)
    render :index, :status => :ok
  end

  def show
  end
  
  def popular_dishes
  end
  
  def create
  end

  def update
  end

  def destroy
  end

  private

  def menus_params
    params.require(:menu).permit(:name, :ingredients, :price, :business_id)
  end

  def update_menus_params
    params.require(:menu).permit(:name, :ingredients, :price)
  end
end
