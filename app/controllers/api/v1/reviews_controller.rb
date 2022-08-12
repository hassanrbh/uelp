class Api::V1::ReviewsController < ApplicationController
  def index
  end

  def create
    @business = Business.find_by_name(params[:business_slug])
    @review = current_user.reviews.new(reviews_params)
    @review.business = @business

    return render :create, status: :ok if (@review.save)

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
