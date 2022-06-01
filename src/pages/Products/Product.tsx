import React from 'react'
import styled from 'styled-components'

export type TypeProps = {
  __typename: string
  id: string
  title: string
  image: string
  price: number
  categoy: {
    __typename: string
    id: string
    title: string
  }
}

const Wrapper = styled.div`
  width: 100%;
  background-color: white;
  border-radius: 4px;
  border: 1px solid #ebe7e7;
  box-shadow: 0px 0px 12px #e3e2e2;
  padding: 1rem;
`

const Figure = styled.figure`
  padding-bottom: 80%;
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

export default function Product({ product }: { product: TypeProps }) {
  return (
    <Wrapper>
      <Figure>
        <img src={product.image} alt={product.title} />
      </Figure>
      <p>{product.title}</p>
      <p>R$ {product.price.toFixed(2).replace('.', ',')}</p>
    </Wrapper>
  )
}
