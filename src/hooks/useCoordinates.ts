import Geocode from 'react-geocode'

type TypeProps = {
  apiKey: string
  address: string
}

export default function useCoordinates({ apiKey, address }: TypeProps) {
  Geocode.setApiKey(apiKey)

  return Geocode.fromAddress(address).then(
    (response) => {
      const { lat, lng } = response.results[0].geometry.location
      return { lat, lng }
    },
    (error) => {
      return error
    }
  )
}
