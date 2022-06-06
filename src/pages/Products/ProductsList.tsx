import React, { useId } from 'react'
import styled from 'styled-components'

import { useQuery, gql } from '@apollo/client'

import useLocalStorage from '../../hooks/useLocalStorage'

import { Loader } from '../../common'

const Wrapper = styled.div`
  width: 100%;
  background-color: white;
  border-radius: 4px;
  border: 1px solid #ebe7e7;
  box-shadow: 0px 0px 12px #e3e2e2;
  padding: 1rem;

  p {
    line-height: 1.2;
    font-size: 0.75rem;
    margin-top: 0.5rem;
  }
`

const Figure = styled.figure`
  padding-bottom: 100%;
  position: relative;

  > img {
    display: block;
    max-width: 100%;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    object-fit: contain;
  }
`

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

export default function ProductsList() {
  const DISTRIBUTOR_LOCAL_STORAGE_KEY = 'current_distributor'
  const [distributorLS] = useLocalStorage(DISTRIBUTOR_LOCAL_STORAGE_KEY)
  const id = useId()

  const {
    loading = true,
    error,
    data,
  } = useQuery(PRODUCTS_QUERY, {
    variables: {
      pocId: distributorLS.id,
    },
  })

  if (error) return `Ops! Algo deu errado`
  if (loading) <Loader />

  return data?.poc?.products?.map((product: any, index: number) => {
    return (
      <Wrapper key={id + index}>
        <Figure>
          <img loading="lazy" src={product.image} alt={product.title} />
        </Figure>
        <p>{product.title}</p>
        <p>R$ {product.price.toFixed(2).replace('.', ',')}</p>
      </Wrapper>
    )
  })
}
