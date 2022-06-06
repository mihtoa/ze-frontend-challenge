import React from 'react'
import styled from 'styled-components'

import { Container } from '../../common'
import Categories from './Categories'
import ProductsList from './ProductsList'

const Wrapper = styled.div`
  min-height: calc(100vh - 12rem);
  margin: 2rem 0;
`

const List = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(6rem, 1fr));
  gap: 1rem;
`

export default function Products() {
  return (
    <main>
      <Container>
        <Wrapper>
          <h4>Categorias</h4>
          <Categories />
          <h4>Produtos</h4>
          <List>
            <ProductsList />
          </List>
        </Wrapper>
      </Container>
    </main>
  )
}
