class UserMailer < ApplicationMailer
  def share_note(from,user, message)
    @user = user
    @from = from
    @message = message
    mail(to: user, subject: "#{from.username} shared a note to you")
  end
end
