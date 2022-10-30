/* eslint-disable import/no-anonymous-default-export */
import {  gql } from "@apollo/client";
const RECIPE = gql`
  query Query {
    exercise {
      id
      name
      image
    }
  }
`;

export const GQL =[RECIPE];
