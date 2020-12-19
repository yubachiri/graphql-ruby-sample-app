# == Schema Information
#
# Table name: users
#
#  id         :uuid             not null, primary key
#  email      :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class User < ApplicationRecord
  has_many :identities

  validates :email, presence: true, uniqueness: true

  def self.prepare(id_token_payload)
    identity_params = { sub: id_token_payload[:sub],
                        iss: id_token_payload[:iss] }
    email = id_token_payload[:email]
    user = where(email: email).joins(:identities).merge(Identity.where(identity_params)).first

    if user.blank?
      user = User.find_or_create_by(email: email)
      user.identities.find_or_create_by(identity_params)
    end

    user
  end
end
