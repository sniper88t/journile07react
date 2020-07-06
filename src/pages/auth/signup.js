/* @flow */

import React from 'react';
import { connect } from 'react-redux';

import logoWhite from '../../resources/image/logoWhite.png';
import logoBlue from '../../resources/image/logoBlue.png';
import iphone from '../../resources/image/iPhone.png';
import apple from '../../resources/image/app_store.png';
import google from '../../resources/image/google_play.png';
import Checkbox from '../../components/form/checkbox';
import Icon from '../../components/icon';
import {
  changeAuthModalType,
} from '../../redux/actions';


type State = {
  first_name: string,
  last_name: string,
  username: string,
  email: string,
  password: string,
  phone_number: string,
  agree_terms: boolean,
  theme: string,
};

class Signup extends React.Component<any, State> {
  state: State = {
    first_name: '',
    last_name: '',
    username: '',
    email: '',
    password: '',
    phone_number: '',
    agree_terms: false,
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

  signup = () => {
  }

  gotoLogin = () => {
    this.props.changeAuthModalType(0);
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
      <div className='signup-modal d-flex'>
        <div className='mobile-suggest'>
          <img className='screenshot' src={iphone} alt='screenshot' />
          <div className='appstore-buttons'>
            <img src={apple} alt='app store' />
            <img src={google} alt='google play store' />
          </div>
        </div>
        <div className='modal-content'>
          <div className='content-wrapper d-flex flex-column'>
            <div className='logo'>
              <img src={theme === 'dark' ? logoWhite : logoBlue} alt='logo' />
            </div>
            <div className='welcome'>
              Please complete to create your account.
            </div>
            <div className='form-row'>
              <div className='form-group col-md-6'>
                <input id='first_name' type='text' className='form-control' placeholder='First name' required value={this.state.first_name} onChange={val => this.handleChange('first_name', val)} />
              </div>
              <div className='form-group col-md-6'>
                <input id='last_name' type='text' className='form-control' placeholder='Last name' required value={this.state.last_name} onChange={val => this.handleChange('last_name', val)} />
              </div>
            </div>
            <div className='form-group'>
              <input id='username' type='text' className='form-control' placeholder='Username' required value={this.state.username} onChange={val => this.handleChange('username', val)} />
            </div>
            <div className='form-group'>
              <input id='email' type='email' className='form-control' placeholder='Email' required value={this.state.email} onChange={val => this.handleChange('email', val)} />
            </div>
            <div className='form-group'>
              <input id='password' type='password' className='form-control' placeholder='Password' required value={this.state.password} onChange={val => this.handleChange('password', val)} />
            </div>
            <div className='form-group'>
              <input id='phone_number' type='tel' className='form-control' placeholder='Phone number' required value={this.state.phone_number} onChange={val => this.handleChange('phone_number', val)} />
            </div>
            <div className='form-group'>
              <Checkbox id='agree_terms' className='col-auto' label='I agree with terms and conditions' value={this.state.agree_terms} onChange={value => this.setState({agree_terms: value})} />
            </div>
            <div className='have-account text-center'>
              Aleady have an account?  <label className='to-login' onClick={this.gotoLogin}>{'Login'}</label>
            </div>
            <div className='buttons d-flex justify-content-center'>
              <button type='button' className='btn btn-main' onClick={this.signup}>Sgin up</button>
            </div>
            <p className='text-or'>Or</p>
            <div className='social-buttons'>
              <Icon className='icon-button' name='google' size={38} onClick={this.onClickGoogleButton} />
              <Icon className='icon-button' name='facebook' size={38} onClick={this.onClickFBButton} />
            </div>
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

export default connect(mapStateToProps, { changeAuthModalType })(Signup);