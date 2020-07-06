/* @flow */

import { gql } from 'apollo-boost';

export const getHotChannels = gql`
  query GetHotChannels {
    getHotChannels
    {
      id
      name
      username
      email
      logo
      cover_image
      site_url
      country {
          id
          name
          country_code
          dial_code
      }
      type
      description
    }   
  }
`;

export const getChannels = gql`
  query GetChannels {
    getChannels {
      id
      name
      username
      email
      logo
      cover_image
      site_url
      country {
          id
          name
          country_code
          dial_code
      }
      type
      description
    }
  }
`;

export const getCountries = gql`
  query GetCountries {
    getCountries {
      id
      name
      country_code
      dial_code
    }
  }      
`;