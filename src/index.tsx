import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

import Home from './home'
import Products from './products'

import { Header, Footer } from './common'

import './main.scss'

const client = new ApolloClient({
  uri: 'https://frontend-code-challenge-api.ze.delivery/graphql',
  cache: new InMemoryCache(),
})

export default function Page() {
  return (
    <BrowserRouter>
      <Header />
      <nav>
        <Link to="/">Home</Link> | <Link to="produtos">Produtos</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="produtos" element={<Products />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

const root = createRoot(document.getElementById('root'))
root.render(
  <ApolloProvider client={client}>
    <Page />
  </ApolloProvider>
)
