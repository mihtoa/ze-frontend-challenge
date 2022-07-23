import React, { useId } from 'react'

import { useLocation } from 'react-router-dom'
import { useQuery, gql } from '@apollo/client'

import * as Style from './ProductsList.style'

import { TypeProduct } from './Product'

import { Loader } from '../common'
import { Product } from '../components'

export const PRODUCTS_QUERY = gql`
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

export default function ProductsList({ distributor }: { distributor: { id?: string } }) {
  const distributorLS = distributor
  const category = useQueryParams().get('categoria')
  const id = useId()

  const {
    loading = true,
    error,
    data,
  } = useQuery(PRODUCTS_QUERY, {
    variables: {
      pocId: distributorLS?.id,
      ...(category && { productsCategoryId: category }),
    },
  })

  if (error) return <p>Ops! Algo deu errado</p>
  if (loading) return <Loader />

  return data.poc.products.length > 0 ? (
    <Style.List>
      {data?.poc?.products?.map((product: TypeProduct, index: number) => (
        <Product key={id + index} product={product} />
      ))}
    </Style.List>
  ) : (
    <Style.Empty>
      <p>Nenhum produto encontrado :/</p>
    </Style.Empty>
  )
}
