import React, { useId } from 'react'

import { useQuery, gql } from '@apollo/client'

import { Loader } from '../../common'

const CATEGORIES_QUERY = gql`
  query Categories {
    categories {
      id
      title
    }
  }
`

export default function Categories() {
  const { loading, error, data } = useQuery(CATEGORIES_QUERY)
  const id = useId()

  if (error) return `Ops! Algo deu errado`
  if (loading) <Loader />

  return data?.categories.map((category: any, index: number) => {
    return <p key={id + index}>{category.title}</p>
  })
}
