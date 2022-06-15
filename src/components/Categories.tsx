import React, { useId } from 'react'
import { useQuery, gql } from '@apollo/client'

import * as Style from './Categories.style'

import { Loader } from '../common'

const CATEGORIES_QUERY = gql`
  query Categories {
    categories {
      id
      title
    }
  }
`

type TypeCategory = {
  id: string
  title: string
}

export default function Categories() {
  const { loading, error, data } = useQuery(CATEGORIES_QUERY)
  const id = useId()

  if (error) return <p>Ops! Algo deu errado</p>
  if (loading) return <Loader />

  return data?.categories.map((category: TypeCategory, index: number) => {
    return (
      <Style.Anchor to={`?categoria=${category.id}`} key={id + index}>
        {category.title}
      </Style.Anchor>
    )
  })
}
