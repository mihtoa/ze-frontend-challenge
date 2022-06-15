import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { GlobalStyle } from './App.style'

import { Header, Footer } from './common'
import { Home, Products } from './pages'

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
