class ReviewMailer < ApplicationMailer
  def notify_business_owner(owner, review)
    @owner = owner
    @review = review

    mail(
      to: owner.email,
      subject:
        "#{@review.user.username} review your business, check out your process"
    )
  end
end
