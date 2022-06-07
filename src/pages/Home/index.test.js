import React from 'react'
import { render } from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing'

import Home from '.'

describe('Home', () => {
  test('renders Home component', () => {
    render(
      <MockedProvider>
        <Home />
      </MockedProvider>
    )
  })
})
