import React, { useState } from 'react'

import * as Style from './Product.style'

export type TypeProduct = {
  id: string
  title: string
  image: string
  price: number
  category: {
    id: string
    title: string
  }
}

export default function Product({ product }: { product: TypeProduct }) {
  const [quantity, setQuantity] = useState(0)

  return (
    <Style.Wrapper>
      <Style.Figure>
        <img
          loading="lazy"
          src={product.image}
          alt={`Imagem do produto ${product.title}`}
        />
      </Style.Figure>
      <p>{product.title}</p>
      <Style.Price>R$ {product.price.toFixed(2).replace('.', ',')}</Style.Price>
      <Style.Controls>
        <button type="button" onClick={() => setQuantity(quantity + 1)}>
          +
        </button>
        <input type="number" min="0" value={quantity} readOnly />
        <button
          type="button"
          onClick={() => {
            if (quantity > 0) setQuantity(quantity - 1)
          }}>
          -
        </button>
      </Style.Controls>
    </Style.Wrapper>
  )
}
