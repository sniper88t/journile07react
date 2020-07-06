/* @flow */

import { combineReducers } from 'redux';

import auth from './auth';
import sidebar from './sidebar';
import theme from './theme';

export default combineReducers ({
  auth,
  sidebar,
  theme,
})