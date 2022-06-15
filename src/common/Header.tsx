import React from 'react'
import { Link } from 'react-router-dom'

import * as Style from './Header.style'

import Container from './Container'

export default function Header() {
  return (
    <Style.HeaderWrapper>
      <Container>
        <Style.Navigation>
          <Link to="/" onClick={() => window.localStorage.clear()}>
            <Style.Logo>
              <img src="/white-logo.png" alt="Logo Zé Delivery" />
            </Style.Logo>
          </Link>

          <Style.Login href="#">Entrar</Style.Login>
        </Style.Navigation>
      </Container>
    </Style.HeaderWrapper>
  )
}
