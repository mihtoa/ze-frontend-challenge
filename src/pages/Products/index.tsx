import React from 'react'

import * as Style from './Products.style'

import { Container } from '../../common'
import { Categories, ProductsList } from '../../components'

export default function Products() {
  return (
    <main>
      <Container>
        <Style.Wrapper>
          <Style.Title>CATEGORIAS</Style.Title>
          <Style.CategoriesList>
            <Categories />
          </Style.CategoriesList>
          <Style.Title>PRODUTOS</Style.Title>
          <div>
            <ProductsList />
          </div>
        </Style.Wrapper>
      </Container>
    </main>
  )
}
