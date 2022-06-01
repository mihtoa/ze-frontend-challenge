import React, { useEffect } from 'react'
import styled from 'styled-components'

import { Navigate } from 'react-router-dom'

import useGeolocation from 'react-hook-geolocation'
import useCoordinates from '../../hooks/useCoordinates'
import useDistributor from '../../hooks/useDistributor'
import useLocalStorage from '../../hooks/useLocalStorage'

import { DISTRIBUTOR_LOCAL_STORAGE_KEY } from '../../../constants'

import { Container } from '../../common'

import Form from '../../components/Form'

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

export default function Home() {
  // const apiKey = 'AIzaSyDTCQZ3MnGV5CuuRIKXd5WP3t9LVdHgAx4'
  // const address = 'Rua Américo Brasiliense, São Paulo'

  // const geolocation = useGeolocation()
  // const coordinates = useCoordinates({ apiKey, address })
  // const distributor = useDistributor({
  //   lat: '-23.632919',
  //   lng: '-46.709453',
  // })
  const [currDistributor, setCurrDistributor] = useLocalStorage(
    DISTRIBUTOR_LOCAL_STORAGE_KEY,
    null
  )

  // useEffect(() => {
  //   if (!distributor.loading && !!distributor?.data?.pocSearch) {
  //     setCurrDistributor(
  //       DISTRIBUTOR_LOCAL_STORAGE_KEY,
  //       distributor.data.pocSearch[0]
  //     )
  //   }
  // }, [distributor])

  if (currDistributor) {
    return <Navigate to="/produtos" />
  }

  return (
    <Main>
      <Container>
        <Wrapper>
          <Title>
            <strong>Bebidas geladas</strong> a <strong>preço</strong> de
            <br /> mercado na sua casa <strong>agora</strong>
          </Title>
          <Form />
        </Wrapper>
      </Container>
    </Main>
  )
}
