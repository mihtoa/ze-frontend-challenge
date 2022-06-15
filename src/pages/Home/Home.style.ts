import styled from 'styled-components'

const Main = styled.main`
  background-color: var(--primary-color);
`

const Wrapper = styled.div`
  min-height: calc(100vh - 10rem);
  padding: 3rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Title = styled.h2`
  font-weight: normal;
  font-size: 2.5rem;
  text-align: center;
`

export { Main, Wrapper, Title }
