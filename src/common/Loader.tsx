import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 100px;

  > svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`

export default function Loader() {
  return (
    <Wrapper style={{ color: 'var(--primary-color)' }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-20 5 100 100"
        width="80px"
        height="80px">
        <circle cx="6" cy="50" r="6" fill="currentColor">
          <animateTransform
            attributeName="transform"
            begin="0.1"
            dur="1s"
            repeatCount="indefinite"
            type="translate"
            values="0 15 ; 0 -15; 0 15"></animateTransform>
        </circle>
        <circle cx="30" cy="50" r="6" fill="currentColor">
          <animateTransform
            attributeName="transform"
            begin="0.2"
            dur="1s"
            repeatCount="indefinite"
            type="translate"
            values="0 10 ; 0 -10; 0 10"></animateTransform>
        </circle>
        <circle cx="54" cy="50" r="6" fill="currentColor">
          <animateTransform
            attributeName="transform"
            begin="0.3"
            dur="1s"
            repeatCount="indefinite"
            type="translate"
            values="0 5 ; 0 -5; 0 5"></animateTransform>
        </circle>
      </svg>
    </Wrapper>
  )
}
