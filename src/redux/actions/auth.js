/* @flow */

import {
  AUTH_TOGGLE_MODAL,
  AUTH_MODAL_TYPE,
} from '../type';

export const toggleAuthModal = (isOpen: boolean, type: number = 0) => {
  return {
    type: AUTH_TOGGLE_MODAL,
    data: { isOpen, type }
  }
}

export const changeAuthModalType = (type: number) => {
  return {
    type: AUTH_MODAL_TYPE,
    data: { type }
  }
}