import React from 'react'
import { createRoot } from 'react-dom/client'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

import App from './App'

const client = new ApolloClient({
  uri: 'https://frontend-code-challenge-api.ze.delivery/graphql',
  cache: new InMemoryCache(),
})

const root = createRoot(document.getElementById('root'))
root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
)
