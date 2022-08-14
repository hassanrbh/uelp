class Api::V1::ReviewsController < ApplicationController
  def index
    @business = Business.find_by_name(params[:business_slug])
    @reviews_count = @business.reviews.count
    @overall_rating =
      Review.where(business: @business).average(:rating).round(2).to_s

    return render :index, status: :ok
  end

  def create
    @business = Business.find_by_name(params[:business_slug])
    @review = current_user.reviews.new(reviews_params)
    @review.business = @business
    
    if (@review.save)
      Draft.where(business: @business, :user => current_user).destroy_all
      return render :create, status: :ok if (@review.save)
    end
    return render json: { error: ["something went wrong"] }, status: 404
  end

  def filter
  end

  def sort
  end

  def search
  end

  private

  def reviews_params
    params.require(:reviews).permit(:rating, :description)
  end
end
