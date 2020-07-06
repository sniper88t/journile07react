/* @flow */

import React from 'react';
import { Query } from "react-apollo";
import _ from 'lodash';

import Icon from '../../components/icon';
import InfiniteScroll from '../../components/infiniteScroll';
import Spinner from '../../components/spinner';
import Post from '../../components/post';
import {
  getTrendingGammatags,
  getPublicPosts,
  getHotTopics,
} from '../../graphql/query';
import './index.scss';

type State = {
  posts: Array<any>,
  hasMorePosts: boolean,
  loadPosts: boolean,
};

class Home extends React.Component<any, State> {
  state = {
    posts: [],
    hasMorePosts: true,
    loadPosts: true,
  }

  loadMorePosts = () => {
    if (!this.state.loadPosts) {
      this.setState({
        loadPosts: true,
      })
    }
  }

  renderHotTopics() {
    return (
      <Query query={getHotTopics}>
        {({ loading, error, data }) => {
          if (loading) return (<Spinner />)
          if (error) return null

          if (data) {
            return data.getHotTopics.map((post) => (
              <div key={post.id} className="hot-topic" style={{backgroundImage: `url('${post.cover_image}')`}}>
                <span className="title">{post.title}</span>
              </div>
            ))
          }
        }}
      </Query>
    )
  }

  renderTrending() {
    return (
      <Query query={getTrendingGammatags}>
        {({ loading, error, data }) => {
          if (loading) return (<Spinner />)
          if (error) return null

          if (data) {
            return data.getTrendingGammatags.map((gammatag) => (
              <div key={gammatag.id} className="trending">
                <div className="name blue" onClick={() => this.props.history.push('/explore?key='+gammatag.name)}>
                  <Icon className="symbol" name="gamma" size={18} />
                  {gammatag.name}
                </div>
                <div className="rate">
                  {`${gammatag.rate} Memos`}
                </div>
              </div>
            ))
          }
        }}
      </Query>
    )
  }

  renderPostsLoader() {
    const { posts } = this.state

    return (
      <Query query={getPublicPosts} variables={{date: posts.length > 0? posts[posts.length-1].original_post_date: null, isLater: false}}>
        {({ loading, error, data }) => {
          if (loading) return (<Spinner />)
          if (error) return null

          if (data) {
            this.setState({
              posts: _.concat(posts, data.getPublicPosts),
              hasMorePosts: data.getPublicPosts.length === 20,
              loadPosts: false,
            })
          } else {
            console.log('getPublicPosts error', error)
            this.setState({
              loadPosts: false,
            })
          }
          return null;
        }}
      </Query>
    )
  }

  render() {
    return (
      <div className="home page">
        <div className="left-content">
          <div className="sub-header">
            <Icon name="fire" size={24} className="icon-primary" />
            <h5 className="sub-header-title">Hot Topics</h5>
          </div>
          {this.renderHotTopics()}
        </div>
        <div className="main-content">
          <div className="sub-header">
            <Icon name="chart_line" size={24} className="icon-primary" />
            <h5 className="sub-header-title">Trending</h5>
          </div>
          
          <InfiniteScroll
            pageStart={0}
            loadMore={this.loadMorePosts}
            hasMore={this.state.hasMorePosts} >

            <div className="posts">
              {this.state.posts.map((post, i) => (
                <Post key={i} data={post} />
              ))}
            </div>
          </InfiniteScroll>
          {this.state.loadPosts && this.renderPostsLoader()}
        </div>
        <div className="right-content">
          <div className="sub-header">
            <Icon name="chart_line" size={24} className="icon-primary" />
            <h5 className="sub-header-title">Trending</h5>
          </div>
          {this.renderTrending()}
        </div>
      </div>
    )
  }
}

export default Home;