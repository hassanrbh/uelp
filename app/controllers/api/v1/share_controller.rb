# frozen_string_literal: true

module Api
  module V1
    class ShareController < ApplicationController
      before_action :authenticate_user!

      def create
        expected_user = check_if_receiver_exists_as_yelper

        if expected_user
          @business = Business.find_by_name(params[:business_slug])
          @share = Share.new(share_params)
          @share.user = current_user
          @share.business = @business

          begin
            if @share.save
              if !@share.to.match(Devise.email_regexp)
                UserMailer.share_note(
                  current_user,
                  expected_user.email,
                  @share.note
                ).deliver_now
              else
                UserMailer.share_note(
                  current_user,
                  @share.to,
                  @share.note
                ).deliver_now
              end

              render json: { send: "Sent" }, status: :ok
            else
              render json: @share.errors.full_messages, status: 403
            end
          rescue ActiveRecord::RecordNotUnique
            render json: { error: ["Email already Sent"] }, status: :found
          end
        else
          render json: {
                  to: ["Yelper user dosen't exist, use Email instead"]
                },
                status: :not_found
        end
      end

      def check_if_receiver_exists_as_yelper
        # we check if share to propertie matches the email regex pattern
        unless params[:share][:to].match(Devise.email_regexp)
          # we see if that username arlready in the database
          expected_user = User.find_by_username(params[:share][:to])

          return expected_user if expected_user.present? && !expected_user.nil?

          return false
        end
        true
      end

      def share_params
        params.require(:share).permit(:to, :note)
      end
    end
  end
end
