import React, { useState, FormEventHandler } from 'react'
import { Navigate } from 'react-router-dom'
import { useLazyQuery, gql } from '@apollo/client'

import useCoordinates from '../../hooks/useCoordinates'
import useLocalStorage from '../../hooks/useLocalStorage'

import * as Style from './Home.style'

import { Container } from '../../common'
import { Form } from '../../components'

export const DISTRIBUTOR_QUERY = gql`
  query PocSearch($pocSearchLat: String!, $pocSearchLong: String!) {
    pocSearch(lat: $pocSearchLat, long: $pocSearchLong) {
      id
      status
      name
    }
  }
`

export default function Home() {
  const [address, setAdress] = useState('')
  const apiKey = process.env.GEOCODING_API_KEY
  const config = { apiKey, address }

  const DISTRIBUTOR_LOCAL_STORAGE_KEY = 'current_distributor'
  const [distributorLS, setDistributorLS] = useLocalStorage(
    DISTRIBUTOR_LOCAL_STORAGE_KEY,
    null
  )

  const [getDistributor, { data: distributor }] =
    useLazyQuery(DISTRIBUTOR_QUERY)

  const handleSubmit: FormEventHandler<Element> = async (event) => {
    event.preventDefault()
    const { lat, lng } = await useCoordinates(config)

    if (!lat || !lng) {
      alert(
        'Endereço inválido. Tente o endereço: "Rua Ricardo Lunardelli, 123, 04719-070, São Paulo" :)'
      )
      return
    }

    getDistributor({
      variables: {
        pocSearchLat: lat.toString(),
        pocSearchLong: lng.toString(),
      },
    })

    if (!distributor) {
      alert(
        'Não há distribuidores disponíveis nesse local, tente o endereço para teste: "Rua Ricardo Lunardelli, 123, 04719-070, São Paulo" :)'
      )
      return
    }

    setDistributorLS(DISTRIBUTOR_LOCAL_STORAGE_KEY, distributor?.pocSearch[0])
  }

  if (distributorLS) {
    return <Navigate to="/produtos" />
  }

  return (
    <Style.Main>
      <Container>
        <Style.Wrapper>
          <Style.Title>
            <strong>Bebidas geladas</strong> a <strong>preço</strong> de
            <br /> mercado na sua casa <strong>agora</strong>
          </Style.Title>
          <Form
            onChange={(event) => setAdress(event.target.value)}
            onSubmit={handleSubmit}
          />
        </Style.Wrapper>
      </Container>
    </Style.Main>
  )
}
