export const CollectionQuery = /* GraphQL */ `
  query CollectionPage($handle: String!, $first: Int = 24) {
    collection(handle: $handle) {
      id
      title
      description
      image {
        url
        altText
        width
        height
      }
      products(first: $first) {
        edges {
          node {
            id
            title
            handle
            availableForSale
            featuredImage {
              url
              altText
              width
              height
            }
            priceRange {
              minVariantPrice {
                amount
                currencyCode
              }
            }
          }
        }
      }
    }
  }
`;
