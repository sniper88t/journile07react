/* @flow */

import React from 'react';
import { connect } from 'react-redux';

import MenuItem from './menuItem';
import logoWhite from '../../resources/image/logoWhite.png';
import {
  toggleSidebar,
} from '../../redux/actions';
import './index.scss';


type State = {
  isOpen: boolean
};

class Sidebar extends React.Component<any, State> {
  state: State = {
    isOpen: false,
  }

  static getDerivedStateFromProps(props, state) {
    return {
      isOpen: props.isOpen,
    }
  }

  closeSidebar = () => {
    this.props.toggleSidebar(false);
  }

  render() {
    return (
      <div className={`sidebar ${this.state.isOpen? 'active': 'inactive'}`}>
        <div className="sidebar-wrapper">
          <div className="sidebar-content">
            <div className="profile">
              <div className="underline" />
            </div>
            <div className="menu">
              <ul className="menu-group">
                <MenuItem icon="profile" label="Profile" active link={`/profile/${0}`} />
                <MenuItem icon="wallet" label="Wallet" link="/wallet" />
                <MenuItem icon="bell" label="Notifications" link="/notifications" />
                <MenuItem icon="comments" label="Pings" link="/pings/" />
                <MenuItem icon="bookmark_fill" label="Bookmarked" link="/bookmark" />
              </ul>
              <ul className="menu-group">
                <MenuItem icon="chart_fill" label="Ads" link={`/ads`} />
                <MenuItem icon="setting" label="Settings" link="/settings" />
                <MenuItem icon="exit" label="Sign out" link="/signout" />
              </ul>
            </div>
          </div>
          <div className="sidebar-block" onClick={this.closeSidebar}>
            <img className="logo" src={logoWhite} alt='logo' />
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    isOpen: state.sidebar.isOpen,
  }
}

export default connect(mapStateToProps, { toggleSidebar })(Sidebar);