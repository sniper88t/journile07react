/* @flow */

import React from 'react';
import { connect } from 'react-redux';

import logoWhite from '../../resources/image/logoWhite.png';
import logoBlue from '../../resources/image/logoBlue.png';
import Checkbox from '../../components/form/checkbox';
import Icon from '../../components/icon';
import {
  changeAuthModalType,
} from '../../redux/actions';


type State = {
  username: string,
  password: string,
  remember_me: boolean,
  theme: string,
};

class Login extends React.Component<any, State> {
  state: State = {
    username: '',
    password: '',
    remember_me: false,
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

  login = () => {
  }

  gotoSignup = () => {
    this.props.changeAuthModalType(1);
  }

  gotoForgotPassword = () => {
    this.props.changeAuthModalType(2);
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
      <div className='login-modal modal-content'>
        <div className='content-wrapper d-flex flex-column'>
          <div className='logo'>
            <img src={theme === 'dark' ? logoWhite : logoBlue} alt='logo' />
          </div>
          <div className='welcome'>
            Welcome back! Please login to your account.
          </div>
          <div className='form-group'>
            <input id='username' type='text' className='form-control' placeholder='Username' required value={this.state.username} onChange={val => this.handleChange('username', val)} />
          </div>
          <div className='form-group'>
            <input id='password' type='password' className='form-control' placeholder='Password' required value={this.state.password} onChange={val => this.handleChange('password', val)} />
          </div>
          <div className='form-group'>
            <Checkbox id='remember_me' className='col-auto' label='Remember me' value={this.state.remember_me} onChange={value => this.setState({remember_me: value})} />
            <label className='float-right forgot-password' onClick={this.gotoForgotPassword}>{'Forgot Password'}</label>
          </div>
          <div className='buttons d-flex justify-content-between'>
            <button type='button' className='btn btn-main' onClick={this.login}>Login</button>
            <button type='button' className='btn btn-main-outline' onClick={this.gotoSignup}>Sgin up</button>
          </div>
          <p className="text-or">Or</p>
          <div className='social-buttons'>
            <Icon className='icon-button' name="google" size={38} onClick={this.onClickGoogleButton} />
            <Icon className='icon-button' name="facebook" size={38} onClick={this.onClickFBButton} />
          </div>
        </div>
        <div className='terms'>
          <span onClick={this.gotoTerms}>Term of use. Privacy policy</span>
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

export default connect(mapStateToProps, { changeAuthModalType })(Login);