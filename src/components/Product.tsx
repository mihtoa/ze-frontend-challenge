import React, { useState } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  background-color: white;
  border-radius: 4px;
  border: 1px solid #ebe7e7;
  box-shadow: 0px 0px 12px #e3e2e2;
  padding: 1rem;
  display: flex;
  flex-direction: column;

  p {
    line-height: 1.2;
    font-size: 0.75rem;
    margin-bottom: 0.5rem;
  }
`

const Price = styled.p`
  font-size: 0.65rem;
  font-weight: bold;
  opacity: 0.65;
`

const Figure = styled.figure`
  padding-bottom: 90%;
  position: relative;
  margin-bottom: 0.5rem;

  > img {
    display: block;
    max-width: 100%;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    object-fit: contain;
    transform: scale(0.85);
  }
`

const Controls = styled.div`
  display: flex;
  margin-top: auto;
  border: 2px solid var(--light-gray);
  border-radius: 4px;
  font-weight: bold;

  > button {
    width: 33.33%;
    height: 2rem;
    background-color: transparent;
    border: 1px solid var(--light-gray);
    outline: 1px solid var(--light-gray);
    cursor: pointer;
    text-align: center;
    transition: all 0.2s ease-in-out;
    color: var(--dark-gray);

    &:focus {
      outline-color: var(--primary-color);
      border-color: var(--primary-color);
    }
  }

  > input {
    width: 33.3%;
    height: 2rem;
    background-color: transparent;
    border: 1px solid var(--light-gray);
    text-align: center;
    color: var(--dark-gray);
    -moz-appearance: textfield;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    &:focus {
      outline-color: var(--primary-color);
      border-color: var(--primary-color);
    }
  }
`

export default function Product({ product }: any) {
  const [quantity, setQuantity] = useState(0)

  return (
    <Wrapper>
      <Figure>
        <img
          loading="lazy"
          src={product.image}
          alt={`Imagem do produto ${product.title}`}
        />
      </Figure>
      <p>{product.title}</p>
      <Price>R$ {product.price.toFixed(2).replace('.', ',')}</Price>
      <Controls>
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
      </Controls>
    </Wrapper>
  )
}
