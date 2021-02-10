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
class Mutations::UpdateUser < Mutations::BaseMutation
  null false

  argument :name, String, required: true

  field :user, Types::Objects::UserType, null: false

  def resolve(name:)
    context[:current_user].update!(name: name)
    { user: context[:current_user] }
  end
end
