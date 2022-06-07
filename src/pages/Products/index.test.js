import React from 'react'
import TestRenderer from 'react-test-renderer'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { MockedProvider } from '@apollo/client/testing'

import { PRODUCTS_QUERY } from '../../components'

import Products from '.'

const mocks = [
  {
    request: {
      query: PRODUCTS_QUERY,
      variables: {
        pocId: '532',
      },
    },
    result: {
      data: {
        poc: {
          id: '532',
          status: 'AVAILABLE',
          name: 'Distribuidor de treinamento',
          products: [
            {
              id: '8868',
              title: 'Skol 269ml - Unidade',
              image:
                'https://courier-images-codechallenge.s3-us-west-2.amazonaws.com/product/8868_205f958d-2e51-48a3-b4d5-a2998765571a.jpg',
              price: 2.09,
              category: {
                id: '94',
                title: 'Cervejas',
              },
            },
          ],
        },
      },
    },
  },
]

describe('Products', () => {
  it('renders Products component', () => {
    const history = createMemoryHistory()

    const component = TestRenderer.create(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Router location={history.location} navigator={history}>
          <Products distributor={{ id: '532' }} />
        </Router>
      </MockedProvider>
    )
  })
})
