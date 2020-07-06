/* @flow */

import { createStore } from 'redux';

import rootReducer from './reducers';


export function initializeStore() {
  const store = createStore(
    rootReducer,
    {},
  );

  return store;
}