require 'net/http'
require 'uri'

module Secured
  extend ActiveSupport::Concern

  private

  def authenticate_api_key!
    head :unauthorized and return if request.headers['X-API-KEY'] != ENV.fetch('API_KEY')
  end

  def http_token
    if request.headers['Authorization'].present?
      request.headers['Authorization'].split(' ').last
    end
  end

  def auth_token
    @auth_token ||= JWT.decode(http_token, nil,
                               false, # Verify the signature of this token
                               algorithm: 'RS256')
  rescue JWT::VerificationError, JWT::DecodeError
    [{}]
  end

  def identity_is_valid?
    auth_token.first.present?
  end

  def current_user
    return nil if user_params.nil?
    @current_user ||= User.find_or_create_by(email: user_params[:email])
  end

  def user_signed_in?
    current_user.present?
  end

  def user_params
    ActionController::Parameters.new(auth_token.first).permit(:email).to_h.compact
  end
end
