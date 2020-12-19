module Types
  class MutationType < Types::BaseObject
    field :say, mutation: Mutations::Say
  end
end
