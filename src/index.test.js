import React from 'react'
import { render } from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing'

import App from './App'

describe('App', () => {
  test('renders App component', () => {
    render(
      <MockedProvider>
        <App />
      </MockedProvider>
    )
  })
})
