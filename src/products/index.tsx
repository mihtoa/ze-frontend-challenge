import React from 'react'
import styled from 'styled-components'

import { DISTRIBUTOR_LOCAL_STORAGE_KEY } from '../../constants'

import useLocalStorage from '../hooks/useLocalStorage'
import useProducts from '../hooks/useProducts'
import useCategories from '../hooks/useCategories'

import { Loader, Container } from '../common'
import Product, { TypeProps as TypeProduct } from './Product'

const Wrapper = styled.div`
  min-height: calc(100vh - 12rem);
  margin: 2rem 0;
  padding: 2rem 3rem;
`

const List = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
`

export default function Products() {
  const [currDistributor] = useLocalStorage(DISTRIBUTOR_LOCAL_STORAGE_KEY)
  const products = useProducts({ pocId: currDistributor.id })
  const categories = useCategories()

  return (
    <main>
      <Container>
        <Wrapper>
          {categories.data?.categories?.map(
            (category: { id: string; title: string }) => (
              <p>{category.title}</p>
            )
          )}
          <h4>Produtos</h4>
          <List>
            {!!products.data ? (
              products.data.poc.products.map((product: TypeProduct) => (
                <Product product={product} />
              ))
            ) : (
              <Loader />
            )}
          </List>
        </Wrapper>
      </Container>
    </main>
  )
}
