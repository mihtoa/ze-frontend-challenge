import React from 'react'

import { DISTRIBUTOR_LOCAL_STORAGE_KEY } from '../../constants'

import useLocalStorage from '../hooks/useLocalStorage'
import useProducts from '../hooks/useProducts'

import { Loader } from '../common'

export default function Products() {
  const [currDistributor] = useLocalStorage(DISTRIBUTOR_LOCAL_STORAGE_KEY)
  const products = useProducts({ pocId: currDistributor.id })

  return (
    <main>
      <h2>Produtos</h2>
      {!!products.data ? (
        <pre>{JSON.stringify(products.data, null, 2)}</pre>
      ) : (
        <Loader />
      )}
    </main>
  )
}
