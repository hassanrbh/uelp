class Api::V1::ShareController < ApplicationController
  def create
    # create a new share instance and store it in the database 
    # using rails active mailer send an email to the #to user
    # set up sendgrid for sending emails
    # detect the #to if its a username or an email then retrive it and send it
    
  end

  def share_params
    params.require(:share).permit(:to, :note);
  end
end
