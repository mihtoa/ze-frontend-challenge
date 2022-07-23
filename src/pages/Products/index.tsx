import React from 'react'
import { DISTRIBUTOR_LOCAL_STORAGE_KEY } from '../../../constants'

import { useLocalStorage } from '../../hooks'

import * as Style from './Products.style'

import { Container } from '../../common'
import { Categories, ProductsList } from '../../components'

export default function Products() {
  const [distributor] = useLocalStorage(DISTRIBUTOR_LOCAL_STORAGE_KEY, null)

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
            <ProductsList distributor={distributor} />
          </div>
        </Style.Wrapper>
      </Container>
    </main>
  )
}
