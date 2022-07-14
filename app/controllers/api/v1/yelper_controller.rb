class Api::V1::YelperController < ApplicationController
  def show
    @yelper = User.find_by_username(params[:slug])
    if (@yelper.present?) 
      if stale?(etag: @yelper, last_modified: @yelper.updated_at) 
        render :show, :status => :ok
      end
    else 
      render :error, :status => :not_found
    end
  end
end
