class BusinessMailer < ApplicationMailer

  def notify_business_owner(current_user,business, question)
    @question = question
    @business = business
    @current_user = current_user
    mail(to: business.email, subject: "#{current_user.username} ask a question in the community")
  end
  
  def notify_user_questioner(user, business)
    @user = user
    @business = business
    mail(to: user.email, subject: "you just asked a question in the community of #{@business.name}")
  end
  
end