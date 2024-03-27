import { gql } from "@apollo/client";

export const GETQUERY = gql`
  {
    works(sort: "id:asc") {
      data {
        id
        attributes {
          title
          type
          year
          description
          keywords
          slug
        }
      }
    }
  }
`;