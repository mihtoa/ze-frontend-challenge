import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Anchor = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1rem;
  border: 2px solid #ebe7e7;
  border-radius: 4px;
  background-color: white;
  transition: all 0.2s ease-in-out;
  text-align: center;

  &:hover {
    border-color: var(--primary-color);
  }
`
export { Anchor }
