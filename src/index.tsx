import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

import { Header, Footer } from './common'

import Home from './home'
import Products from './products'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');

  :root {
    --primary-color: #FFC500;
    --light-gray: #f5f3ee;
    --dark-gray: #333;
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  body {
    font-family: 'Roboto', sans-serif;
    font-size: clamp(15px, 1.6vw, 20px);
    background-color: var(--light-gray);
  }

  img {
    display: block;
  }

  ul {
    padding: 0;
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`

const client = new ApolloClient({
  uri: 'https://frontend-code-challenge-api.ze.delivery/graphql',
  cache: new InMemoryCache(),
})

export default function Page() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
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
