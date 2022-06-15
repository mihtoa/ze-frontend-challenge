import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
`

const FormStyled = styled.form`
  height: 3rem;
  width: 100%;
  max-width: 30rem;
  margin: 0 auto;
  display: block;
  position: relative;
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
  width: 100%;
  height: 100%;
  padding: 1rem;
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  transition: all 0.2s ease;

  &:focus {
    border-color: var(--dark-gray);
  }
`

const ArrowButton = styled.button`
  float: right;
  background-color: transparent;
  border: none;
  position: absolute;
  top: 0;
  right: 0;
  height: 2.25rem;
  width: 3rem;
  font-size: 2rem;
  color: var(--dark-gray);
  z-index: 1;
  cursor: pointer;
`

export { Wrapper, FormStyled, Icon, Input, ArrowButton }
