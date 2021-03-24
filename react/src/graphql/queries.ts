import gql from "graphql-tag";

export const GET_PROPERTIES = gql`
  query getProperties {
    properties {
      objectNumber
      street
      city
      postalCode
      country
      payments {
        id
        paid
        value
        dateCreated
        dateOverdue
      }
    }
  }
`;
