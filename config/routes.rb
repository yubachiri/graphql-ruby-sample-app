Rails.application.routes.draw do
  post '/graphql', to: 'graphql#execute'

  if Rails.env.development?
    get '/graphiql', to: 'graphiql#show'
  end
end
