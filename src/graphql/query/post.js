/* @flow */

import { gql } from 'apollo-boost';

export const getPublicPosts = gql`
  query GetPublicPosts($date: DateTime, $isLater: Boolean) {
    getPublicPosts(date: $date, isLater: $isLater) {
      id
      title
      description
      cover_image
      type
      original_url
      original_post_date
      category {
        id
        name
        tags
      }
      channel {
        id
        name
        username
        email
        logo
        cover_image
      }
      author {
        id
        username
        first_name
        last_name
        email
        photo
        cover_image
      }
      gamma_tags
      reissued_id
      language
      media {
        images
        videos
      }
      rate {
        like
        dislike
      }
      reply {
        count
      }
    }
  }
`;

export const getPrivatePosts = gql`
  query GetPrivatePosts($date: DateTime, $isLater: Boolean) {
    getPrivatePosts(date: $date, isLater: $isLater) {
      id
      title
      description
      cover_image
      type
      original_url
      original_post_date
      category {
        id
        name
        tags
      }
      channel {
        id
        name
        username
        email
        logo
        cover_image
      }
      author {
        id
        username
        first_name
        last_name
        email
        photo
        cover_image
      }
      gamma_tags
      reissued_id
      language
      media {
        images
        videos
      }
      rate {
        like
        dislike
        status
      }
      reply {
        count
      }
      bookmark
      hidden
      report
    }
  }
`;

export const getHotTopics = gql`
  query GetHotTopics($count: Int) {
    getHotTopics(count: $count) {
      id
      title
      description
      cover_image
      type
      original_url
      original_post_date
      category {
        id
        name
        tags
      }
      channel {
        id
        name
        username
        email
        logo
        cover_image
      }
      author {
        id
        username
        first_name
        last_name
        email
        photo
        cover_image
      }
      gamma_tags
      reissued_id
      language
      media {
        images
        videos
      }
      rate {
        like
        dislike
      }
      reply {
        count
      }
    }
  }
`