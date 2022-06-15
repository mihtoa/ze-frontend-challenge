import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { GlobalStyle } from './App.style'

import { Header, Footer, Loader } from './common'

const Home = lazy(() => import('./pages/Home'))
const Products = lazy(() => import('./pages/Products'))

export default function App() {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="produtos" element={<Products />} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  )
}
