/* @flow */

import React from 'react';
import { connect } from 'react-redux';

import logoWhite from '../../resources/image/logoWhite.png';
import logoBlue from '../../resources/image/logoBlue.png';
import Icon from '../../components/icon';
import {
  changeAuthModalType,
} from '../../redux/actions';


type State = {
  email: string,
  theme: string,
};

class ForgotPassword extends React.Component<any, State> {
  state: State = {
    email: '',
    theme: 'dark',
  }

  static getDerivedStateFromProps(props, state) {
    return {
      theme: props.theme,
    };
  }

  handleChange = (key, target) => {
    this.setState({ [key]: target.target.value })
  }

  sendRequest = () => {
  }

  gotoSignin = () => {
    this.props.changeAuthModalType(0);
  }

  gotoForgotPassword = () => {
  }

  gotoTerms = () => {
  }

  onClickFBButton = () => {
  }

  onClickGoogleButton = () => {
  }

  render() {
    const {
      theme,
    } = this.state;

    return (
      <div className='forgotpassword-modal modal-content'>
        <div className='close-button' onClick={this.gotoSignin}>
          <Icon className='icon-close' name='arrow_left' size={24} />
        </div>
        <div className='content-wrapper d-flex flex-column'>
          <div className='logo'>
            <img src={theme === 'dark' ? logoWhite : logoBlue} alt='logo' />
          </div>
          <div className='welcome'>
            Enter your email and we send you a password reset link.
          </div>
          <div className='form-group'>
            <input id='email' type='email' className='form-control' placeholder='Email' required value={this.state.email} onChange={val => this.handleChange('email', val)} />
          </div>
          <div className='buttons d-flex justify-content-center'>
            <button type='button' className='btn btn-main' onClick={this.sendRequest}>Send request</button>
          </div>
          <div className='terms'>
            <span onClick={this.gotoTerms}>Term of use. Privacy policy</span>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    theme: state.theme.type,
  }
}

export default connect(mapStateToProps, { changeAuthModalType })(ForgotPassword);