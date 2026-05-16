export const AllProductsQuery = /* GraphQL */ `
  query AllProducts($first: Int = 48) {
    products(first: $first, sortKey: TITLE) {
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
`;
