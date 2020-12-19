import { useApollo } from '@/graphql/apollo'
import { ApolloProvider } from '@apollo/client'
import * as Sentry from '@sentry/react'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Menu } from './components/container/Menu'
import { Routes } from './config/Routes'
import { useCurrentUser } from '@/react/hooks/currentUser'

function FallbackComponent() {
  return <div>An error has occured</div>
}

export const App: React.FC = () => {
  const { idToken } = useCurrentUser()
  const apolloClient = useApollo(idToken)

  return (
    <Sentry.ErrorBoundary fallback={FallbackComponent} showDialog>
      <ApolloProvider client={apolloClient}>
        <BrowserRouter>
          <Menu />
          <Routes />
        </BrowserRouter>
      </ApolloProvider>
    </Sentry.ErrorBoundary>
  )
}
