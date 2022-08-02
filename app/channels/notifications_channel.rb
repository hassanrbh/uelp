class NotificationsChannel < ApplicationCable::Channel
  def subscribed
    stream_from "NotificationsChannel"
  end

  def unsubscribed
    stop_all_streams
  end
end
