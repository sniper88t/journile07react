/* @flow */

import React from 'react';
import { connect } from 'react-redux';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import config from './config';
import Header from './components/header';
import Sidebar from './components/sidebar';
import Home from './pages/home';
import Channels from './pages/channels';
import Notification from './pages/notification';
import Wallet from './pages/wallet';
import AuthModal from './pages/auth';
import './App.scss';


const client = new ApolloClient({
  uri: `${config.server_root_url}/graphql`,
});

type State = {
  theme: string,
  isBlur: boolean,
};

class App extends React.Component<any, State> {
  state: State = {
    theme: 'dark',
    isBlur: false,
  }

  static getDerivedStateFromProps(props, state) {
    return {
      theme: props.theme,
      isBlur: props.isSidebarOpen || props.isAuthModalOpen,
    }
  }

  render () {
    const { theme, isBlur } = this.state;
    if (isBlur) {
      if (document.body) {
        const body = document.body
        body.classList.add('modal-open');
        if (body.scrollHeight > window.innerWidth) {
          body.classList.add('clear-overflow');
        }
      }
    } else {
      if (document.body) {
        const body = document.body
        body.classList.remove('modal-open');
        body.classList.remove('clear-overflow');
      }
    }

    return (
      <ApolloProvider client={client}>
        <Router>
          <div className={theme}>
            <Sidebar />
            <AuthModal />
            <div id="main" className={`${isBlur? "blur": ""} ${this.props.isAuthModalOpen? "header-blur": ""}`}>
              <Header />
              <div className="content">
                <Switch>
                  <Route exact path='/' component={Home}/>
                  <Route exact path='/channels' component={Channels}/>
                  <Route exact path='/notification' component={Notification}/>
                  <Route exact path='/wallet' component={Wallet}/>
                </Switch>
              </div>
            </div>
            
            {/* for svg gradient */}
            <svg style={{width:0,height:0,position:'absolute'}} aria-hidden="true" focusable="false">
              <linearGradient id="svg-gradient-primary" x1="0" y1="1" x2="1" y2="0">
                <stop offset="0%" stopColor="var(--gradient-color-start)" />
                <stop offset="100%" stopColor="var(--gradient-color-end)" />
              </linearGradient>
              <linearGradient id="svg-gradient-secondary" x2="1" y2="0">
                <stop offset="0%" stopColor="var(--gradient-color-start)" />
                <stop offset="100%" stopColor="var(--gradient-color-end)" />
              </linearGradient>
            </svg>
          </div>
        </Router>
      </ApolloProvider>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    isAuthModalOpen: state.auth.isModalOpen,
    isSidebarOpen: state.sidebar.isOpen,
    theme: state.theme.type,
  }
}

export default connect(mapStateToProps, {})(App);
