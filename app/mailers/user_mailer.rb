# frozen_string_literal: true

class UserMailer < ApplicationMailer
  def share_note(from, user, message)
    @user = user
    @from = from
    @message = message
    mail(to: user, subject: "#{from.username} shared a note to you")
  end

  def notify_latest_sign_in(current_user)
    @current_user = current_user
    mail(to: @current_user.email, subject: "Someone Sign In into your account")
  end
end
