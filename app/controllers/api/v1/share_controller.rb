class Api::V1::ShareController < ApplicationController
  before_action :authenticate_user!
  
  def create
    expected_user = check_if_receiver_exists_as_yelper
    if (expected_user)
      business = Business.find_by_name(params[:business_slug])
      @share = Share.new(share_params)
      @share.user = current_user
      @share.business = business
      
      begin 
        if (@share.save)
          if !(@share.to.match(Devise.email_regexp))
            to = User.find_by_username(@share.to)
            UserMailer.share_note(current_user,to.email,@share.note).deliver_now
            render :json => {
              :send => "Sent",
            }, :status => :ok
          else
            UserMailer.share_note(current_user,@share.to,@share.note).deliver_now
            render :json => {
              :send => "Sent",
            }, :status => :ok
          end
        else
          render json: @share.errors.full_messages, :status => :not_found
        end
      rescue ActiveRecord::RecordNotUnique
        render :json => {
          :error => ["Email already Sent"]
        }, :status => :not_found
      end
    else 
      render :json => {
        :to => ["Yelper username not exist, use Email instead"],
      }, :status => :not_found
    end
  end

  def check_if_receiver_exists_as_yelper
    if !(params[:share][:to].match(Devise.email_regexp)) 
      expected_user = User.find_by_username(params[:share][:to])
      if (expected_user.present? && !expected_user.nil?) 
        return true
      end
      return false
    end
    return true
  end

  def share_params
    params.require(:share).permit(:to, :note);
  end
end
