import { useQuery, gql } from '@apollo/client'

const DISTRIBUTOR_COORDINATES = gql`
  query PocSearch($pocSearchLat: String!, $pocSearchLong: String!) {
    pocSearch(lat: $pocSearchLat, long: $pocSearchLong) {
      id
      status
      name
    }
  }
`

type TypeProps = {
  lat: string
  lng: string
}

export default function useDistributor({ lat, lng }: TypeProps) {
  const distributor = useQuery(DISTRIBUTOR_COORDINATES, {
    variables: {
      pocSearchLat: lat,
      pocSearchLong: lng,
    },
  })

  return distributor
}
