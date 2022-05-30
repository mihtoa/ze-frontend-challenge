import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import Home from './home'
import Products from './products'

import { Header, Footer } from './common'

import './main.scss'

class Square extends React.Component {
  render() {
    return (
      <main>
        <Header />
        <nav>
          <Link to="/">Home</Link> | <Link to="produtos">Produtos</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="produtos" element={<Products />} />
        </Routes>
        <Footer />
      </main>
    )
  }
}

const root = createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <Square />
  </BrowserRouter>
)
