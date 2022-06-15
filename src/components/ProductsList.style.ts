import styled from 'styled-components'

const List = styled.div`
  width: 100%;
  margin: 1rem 0 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(8rem, 0.25fr));
  justify-content: center;
  gap: 1rem;
`

const Empty = styled.div`
  margin: 2rem 0;
`

export { List, Empty }
