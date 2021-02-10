# == Schema Information
#
# Table name: users
#
#  id         :uuid             not null, primary key
#  email      :string           not null
#  name       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Types::Objects::UserType < Types::BaseObject
  field :id, ID, null: false
  field :email, String, null: true
  field :name, String, null: true

  def email
    object.id + object.email
  end
end
