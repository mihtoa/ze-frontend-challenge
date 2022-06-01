import React from 'react'
import styled from 'styled-components'

type TypeProps = {
  children?: React.ReactNode
}

const Wrapper = styled.div`
  padding: 0 5rem;
  margin: 0 auto;
  width: 100%;
`

export default function Container({ children }: TypeProps) {
  return <Wrapper>{children}</Wrapper>
}
