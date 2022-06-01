import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin: 0 auto;
  width: 100%;
`

const Icon = styled.div`
  display: flex;
  justify-content: center;
  margin: 2.5rem 0 1.5rem;
  opacity: 0.5;
`

const Input = styled.input`
  background-color: white;
  background-size: 3rem;
  border: 3px solid #adadad;
  border-radius: 40px;
  outline: none;
  height: 3rem;
  width: 30rem;
  margin: 0 auto;
  display: block;
  padding: 1rem;
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  transition: all 0.2s ease;

  &:focus {
    border-color: var(--dark-gray);
  }
`

const LocationButton = styled.button`
  background-color: transparent;
  border: none;
  opacity: 0.6;
  margin: 0.5rem auto;
  display: block;
  text-align: center;
`

export default function Form() {
  return (
    <Wrapper>
      <Icon>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10rem"
          height="5rem"
          viewBox="200 200 350 350">
          <defs>
            <clipPath id="a">
              <path d="M139.21 203h473.58v346H139.21z"></path>
            </clipPath>
          </defs>
          <path
            fill="currentColor"
            d="M376 384.48c39.023 0 70.801-31.777 70.801-70.801 0-39.02-31.777-70.797-70.801-70.797s-70.801 31.777-70.801 70.801c0 39.023 31.777 70.797 70.801 70.797zm0-129.24c32.203 0 58.441 26.188 58.441 58.441 0 32.25-26.238 58.438-58.441 58.438s-58.441-26.188-58.441-58.441c.004-32.25 26.238-58.438 58.441-58.438z"></path>
          <g clipPath="url(#a)">
            <path
              fill="currentColor"
              d="M612.08 539.05l-76.34-135.87a6.23 6.23 0 00-5.398-3.172h-83.117c20.98-29.363 38.738-61.52 38.738-86.332 0-60.617-49.301-109.92-109.92-109.92s-110.01 49.297-110.01 109.92c0 24.77 17.758 56.973 38.738 86.332h-83.113c-2.227 0-4.309 1.184-5.399 3.172l-76.34 135.87c-1.09 1.895-1.043 4.262.047 6.156a6.165 6.165 0 005.352 3.078h461.36c2.18 0 4.214-1.183 5.351-3.078 1.09-1.894 1.137-4.262.047-6.156zM376 216.12c53.797 0 97.559 43.758 97.559 97.559 0 24.531-20.742 58.676-43.523 88.75-.094.14-.188.238-.285.379-21.31 28.176-44.324 52.754-53.75 62.46-9.426-9.753-32.441-34.288-53.75-62.417l-.426-.567c-22.73-30.074-43.379-64.172-43.379-88.656 0-53.75 43.758-97.508 97.555-97.508zM155.88 535.88l69.379-123.51h88.656c26.852 35.281 55.457 63.887 57.73 66.16 1.184 1.184 2.793 1.8 4.356 1.8s3.171-.616 4.355-1.8c2.227-2.227 30.832-30.879 57.73-66.16h88.656l69.379 123.51z"></path>
          </g>
          <path
            fill="currentColor"
            d="M458.03 428.9c-2.273-2.559-6.203-2.793-8.715-.473-2.558 2.274-2.793 6.203-.472 8.715l43.758 49.016-88.56 14.301-169.69-70.328c-3.171-1.324-6.773.188-8.097 3.363-1.324 3.172.187 6.774 3.363 8.098L307 473.702l-97.746 34.097c-3.219 1.137-4.926 4.64-3.789 7.863a6.186 6.186 0 005.824 4.168c.664 0 1.375-.093 2.035-.332l110.87-38.645 56.547 23.391-55.836 8.997c-3.363.519-5.683 3.742-5.113 7.105.473 3.031 3.125 5.21 6.11 5.21.332 0 .664-.046.996-.093l75.633-12.219 41.059 17a5.864 5.864 0 002.367.473 6.194 6.194 0 005.73-3.836c1.325-3.172-.187-6.773-3.363-8.098l-22.543-9.328 76.578-12.359 8.523 9.52a6.216 6.216 0 008.762.52c2.559-2.274 2.793-6.204.473-8.716l-3.219-3.648 18.043-2.938c3.363-.52 5.684-3.742 5.113-7.105-.52-3.363-3.742-5.684-7.105-5.113l-25.86 4.168z"></path>
        </svg>
      </Icon>

      <form action="">
        <Input
          type="text"
          name="address"
          id="inputAdress"
          placeholder="Qual seu endereço?"
        />
      </form>
      <LocationButton type="button">Usar localização atual</LocationButton>
    </Wrapper>
  )
}
