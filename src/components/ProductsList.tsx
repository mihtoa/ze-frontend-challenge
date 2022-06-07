import React, { useId } from 'react'

import { useLocation } from 'react-router-dom'
import { useQuery, gql } from '@apollo/client'
import useLocalStorage from '../hooks/useLocalStorage'

import { Loader } from '../common'
import { Product } from '../components'

const PRODUCTS_QUERY = gql`
  query Poc(
    $pocId: String!
    $productsSearch: String
    $productsCategoryId: String
  ) {
    poc(id: $pocId) {
      id
      status
      name
      products(search: $productsSearch, categoryId: $productsCategoryId) {
        id
        title
        image
        price
        category {
          id
          title
        }
      }
    }
  }
`

function useQueryParams() {
  const { search } = useLocation()
  return React.useMemo(() => new URLSearchParams(search), [search])
}

export default function ProductsList() {
  const DISTRIBUTOR_LOCAL_STORAGE_KEY = 'current_distributor'
  const [distributorLS] = useLocalStorage(DISTRIBUTOR_LOCAL_STORAGE_KEY)
  const category = useQueryParams().get('categoria')
  const id = useId()

  const {
    loading = true,
    error,
    data,
  } = useQuery(PRODUCTS_QUERY, {
    variables: {
      pocId: distributorLS.id,
      ...(category && { productsCategoryId: category }),
    },
  })

  if (error) return <p>Ops! Algo deu errado</p>
  if (loading) return <Loader />

  return data.poc.products.length > 0 ? (
    data?.poc?.products?.map((product: any, index: number) => (
      <Product key={id + index} product={product} />
    ))
  ) : (
    <p>Nenhum produto encontrado</p>
  )
}
