import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import Container from './Container'

const HeaderWrapper = styled.header`
  background-color: var(--dark-gray);
  height: 5rem;
  padding: 0.75rem 0;
`

const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Logo = styled.figure`
  height: 3.5rem;
  width: 11rem;
  max-width: 50vw;

  > img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
`

const Login = styled.a`
  padding: 0.5rem 1rem;
  background-color: transparent;
  border: 2px solid var(--primary-color);
  color: var(--primary-color);
  border-radius: 40px;
  letter-spacing: 0.05rem;
  transition: all 0.2s ease;

  &:hover {
    background-color: var(--primary-color);
    color: var(--dark-gray);
  }
`

export default function Header() {
  return (
    <HeaderWrapper>
      <Container>
        <Navigation>
          <Link to="/" onClick={() => window.localStorage.clear()}>
            <Logo>
              <img src="/white-logo.png" alt="Logo Zé Delivery" />
            </Logo>
          </Link>

          <Login href="#">Entrar</Login>
        </Navigation>
      </Container>
    </HeaderWrapper>
  )
}
