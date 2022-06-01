import React from 'react'
import styled from 'styled-components'

import Container from './Container'

const FooterWrapper = styled.footer`
  background-color: var(--dark-gray);
`

const Wrapper = styled.div`
  height: 5rem;
  width: 100%;
  padding: 0.5rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  color: white;
`

export default function Footer() {
  return (
    <FooterWrapper>
      <Container>
        <Wrapper>
          <p>© 2022 Zé Delivery. Todos os direitos reservados.</p>
        </Wrapper>
      </Container>
    </FooterWrapper>
  )
}
