/* @flow */

import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';

import Icon from '../icon';
import logoWhite from '../../resources/image/logoWhite.png';
import logoBlue from '../../resources/image/logoBlue.png';
import {
  toggleSidebar,
  toggleAuthModal,
  changeTheme,
} from '../../redux/actions';
import './index.scss';


type State = {
  theme: string,
};

class Header extends React.Component<any, State> {
  state: State = {
    theme: 'dark',
  }

  static getDerivedStateFromProps(props, state) {
    return {
      theme: props.theme,
    }
  }

  openSidebar = () => {
    this.props.toggleSidebar(true);
  }

  openAuthModal = () => {
    this.props.toggleAuthModal(true);
  }

  switchTheme = () => {
    const theme = this.state.theme === 'dark'? 'light': 'dark';
    this.props.changeTheme(theme);
  }

  render() {
    return (
      <nav className="header navbar navbar-expand">
        <div className="navbar-brand" onClick={this.openSidebar}>
          <img src={this.state.theme === 'dark'? logoWhite: logoBlue} alt='logo' />
        </div>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">Home</Link>
            <div className="underline" />
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/channels">Channels</Link>
            <div className="underline" />
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/explore">Explore</Link>
            <div className="underline" />
          </li>
          <li className="nav-item" onClick={this.switchTheme} style={{margin: 0}}>
            <div className="nav-link">T</div>
          </li>
        </ul>
        <div className="navbar-right">
          <div className="item-right">
            <button type="button" className="btn btn-main" onClick={this.openAuthModal}>Login</button>
          </div>
          <div className="item-right location">
            {'New York, US'}
            <Icon name={"arrow_down"} size={22} />
          </div>
          <div className="item-right">
            {moment().format("dddd, MMMM D")}
          </div>
          <div className="item-right">
            <Icon name={"sun"} size={24} className={`weather-icon yellow`} />
            <span>{"34"}</span>
            <Icon name={"celcius"} size={24} className="weather-unit" />
          </div>
        </div>
      </nav>
    )
  }
}

function mapStateToProps(state) {
  return {
    theme: state.theme.type,
  }
}

export default connect(mapStateToProps, { toggleSidebar, changeTheme, toggleAuthModal })(Header);