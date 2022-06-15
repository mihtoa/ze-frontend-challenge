import styled from 'styled-components'

const Wrapper = styled.div`
  min-height: calc(100vh - 12rem);
  margin: 2rem 0;
`

const CategoriesList = styled.div`
  width: 100%;
  margin: 1rem 0 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(6rem, 1fr));
  gap: 0.5rem 1rem;
`

const Title = styled.h2`
  font-size: 1.1rem;
  font-weight: lighter;
  letter-spacing: 0.05rem;
`

export { Wrapper, CategoriesList, Title }
