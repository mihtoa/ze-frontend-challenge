import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Header, Footer } from './common'

import Home from './pages/Home'
import Products from './pages/Products'

const GlobalStyle = createGlobalStyle`
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

export default function App() {
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
