class AddNotifyerToNotifyAnswers < ActiveRecord::Migration[7.0]
  def change
    add_column :notify_answers, :notifyer_id,:integer
  end
end
