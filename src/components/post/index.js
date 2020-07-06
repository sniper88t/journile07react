/* @flow */

import React from 'react';

import Icon from '../icon';
import './index.scss';

type Props = {
  data: any,
};

type State = {
};

export default class Post extends React.Component<Props, State> {
  

  render() {
    const {
      id,
      title,
      description,
      cover_image,
      type,
      original_url,
      original_post_date,
      category,
      channel,
      author,
      gamma_tags,
      reissued_id,
      language,
      media,
      rate,
      reply,
      bookmark,
      hidden,
      report,
    } = this.props.data;

    return (
      <div className={`post post-article ${cover_image ? 'has-cover': ''}`}>
        {cover_image && 
          <div className="cover" style={{backgroundImage: `url('${cover_image}')`}} ></div>
        }
        <div className="post-content">
          <div className="post-header">
            <div className="profile">
              {author? author.first_name : channel.username}
            </div>
            <div className="post-info">
              <span className="category">{category.name}</span>
              <Icon className="icon" name={bookmark? 'bookmark_fill': 'bookmark_outline'} size={24} />
              <Icon className="icon" name='more_vertical' size={24} />
            </div>
          </div>
          <div className="main">
            <div className="d-flex flex-column"></div>
            <div className="d-flex flex-row">
              <div className="d-flex flex-column contents">
                <h3 className="title">{title}</h3>
                <p className="description">{description}</p>
              </div>
              <div className="d-flex align-items-end">
                <div className="d-flex flex-row">
                  <Icon className="icon" name='comment_send' size={24} />
                  <Icon className="icon" name='arrow_down' size={24} />
                  <span className="comments">{reply.count}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  };
};