import { useQuery, gql } from '@apollo/client'

const CATEGORIES_QUERY = gql`
  query Categories {
    categories {
      id
      title
    }
  }
`

export default function useCategories() {
  const categories = useQuery(CATEGORIES_QUERY)

  return categories
}
