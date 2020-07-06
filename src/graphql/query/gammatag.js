/* @flow */

import { gql } from 'apollo-boost';

export const getGammatag = gql`
  query GetGammatag($id: Int) {
    getGammatag(id: $id) {
      id
      name
      rate
    }
  }
`;

export const getGammatagByName = gql`
  query GetGammatagByName($name: String) {
    getGammatagByName(name: $name) {
      id
      name
      rate
    }
  }
`;

export const getTrendingGammatags = gql`
  query GetTrendingGammatags($count: Int) {
    getTrendingGammatags(count: $count) {
      id
      name
      rate
    }
  }
`