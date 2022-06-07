import React, { useId } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { useQuery, gql } from '@apollo/client'

import { Loader } from '../common'

const CATEGORIES_QUERY = gql`
  query Categories {
    categories {
      id
      title
    }
  }
`

const Anchor = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1rem;
  border: 2px solid #ebe7e7;
  border-radius: 4px;
  background-color: white;
  transition: all 0.2s ease-in-out;
  text-align: center;

  &:hover {
    border-color: var(--primary-color);
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
      <Anchor to={`?categoria=${category.id}`} key={id + index}>
        {category.title}
      </Anchor>
    )
  })
}
