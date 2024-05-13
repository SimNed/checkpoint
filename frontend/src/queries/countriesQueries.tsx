import { gql } from "@apollo/client";

export const CREATE_COUNTRY = gql`
  mutation Mutation($data: NewCountryInput!) {
    addCountry(data: $data) {
      name
      emoji
      code
    }
  }
`;

export const GET_COUNTRIES = gql`
  query Countries {
    countries {
      emoji
      name
      code
    }
  }
`;
