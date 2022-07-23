import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ADDRESS_LOCAL_STORAGE_KEY } from '../constants'

import { useLocalStorage } from './hooks'

import { GlobalStyle } from './App.style'

import { Header, Footer, Loader } from './common'

const Home = lazy(() => import('./pages/Home'))
const Products = lazy(() => import('./pages/Products'))

export default function App() {
  const [address, setAddressLocalStorage] = useLocalStorage(ADDRESS_LOCAL_STORAGE_KEY, null)

  return (
    <Router>
      <GlobalStyle />
      <Header address={address} setAddressLocalStorage={setAddressLocalStorage} />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home setAddressLocalStorage={setAddressLocalStorage} />} />
          <Route path="produtos" element={<Products />} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  )
}
