import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
:root {
  --primary-color: #FFC500;
  --light-gray: #f5f3ee;
  --dark-gray: #333;
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body {
  font-family: 'Roboto', sans-serif;
  font-size: clamp(14px, 1vw, 20px);
  background-color: var(--light-gray);
  color: var(--dark-gray);
}

img {
  display: block;
}

ul {
  padding: 0;
  list-style: none;
}

a {
  text-decoration: none;
  color: inherit;
}
`
