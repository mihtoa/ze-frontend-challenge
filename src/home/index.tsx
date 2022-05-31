import React, { useEffect } from 'react'

import useGeolocation from 'react-hook-geolocation'

import useCoordinates from '../hooks/useCoordinates'
import useDistributor from '../hooks/useDistributor'
import useLocalStorage from '../hooks/useLocalStorage'

import { DISTRIBUTOR_LOCAL_STORAGE_KEY } from '../../constants'

export default function Home() {
  const apiKey = 'AIzaSyDTCQZ3MnGV5CuuRIKXd5WP3t9LVdHgAx4'
  const address = 'Rua Américo Brasiliense, São Paulo'

  const geolocation = useGeolocation()
  const coordinates = useCoordinates({ apiKey, address })
  const distributor = useDistributor({
    lat: '-23.632919',
    lng: '-46.709453',
  })
  const [currDistributor, setCurrDistributor] = useLocalStorage(
    DISTRIBUTOR_LOCAL_STORAGE_KEY,
    null
  )

  useEffect(() => {
    if (!distributor.loading && !!distributor?.data?.pocSearch) {
      setCurrDistributor(
        DISTRIBUTOR_LOCAL_STORAGE_KEY,
        distributor.data.pocSearch[0]
      )
    }
  }, [distributor])

  return (
    <main>
      <h2>Home</h2>
      {!geolocation.error ? (
        <ul>
          <li>Latitude: {geolocation.latitude}</li>
          <li>Longitude: {geolocation.longitude}</li>
          <li>Location accuracy: {geolocation.accuracy}</li>
          <li>Altitude: {geolocation.altitude}</li>
          <li>Altitude accuracy: {geolocation.altitudeAccuracy}</li>
          <li>Heading: {geolocation.heading}</li>
          <li>Speed: {geolocation.speed}</li>
          <li>Timestamp: {geolocation.timestamp}</li>
        </ul>
      ) : (
        <p>No geolocation, sorry.</p>
      )}
    </main>
  )
}
