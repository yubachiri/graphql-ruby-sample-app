# == Schema Information
#
# Table name: users
#
#  id         :uuid             not null, primary key
#  email      :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Types::Objects::UserType < Types::BaseObject
  def self.authorized?(object, context)
    # TODO: authorize
    # super and context[:user_signed_in] and context[:current_user].id == object.id
    true
  end

  field :id, ID, null: false
  field :email, String, null: true
end
