import { useQuery, gql } from '@apollo/client'

const PRODUCTS_QUERY = gql`
  query Poc(
    $pocId: String!
    $productsSearch: String
    $productsCategoryId: String
  ) {
    poc(id: $pocId) {
      id
      status
      name
      products(search: $productsSearch, categoryId: $productsCategoryId) {
        id
        title
        image
        price
        category {
          id
          title
        }
      }
    }
  }
`

type TypeProps = {
  pocId: string
  productsSearch?: string
  productsCategoryId?: string
}

export default function useProducts({
  pocId,
  productsSearch,
  productsCategoryId,
}: TypeProps) {
  if (!pocId) return null

  const products = useQuery(PRODUCTS_QUERY, {
    variables: {
      pocId,
      productsSearch,
      productsCategoryId,
    },
  })

  return products
}
