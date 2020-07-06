/* @flow */

import {
  AUTH_TOGGLE_MODAL,
  AUTH_MODAL_TYPE,
} from '../type';


const INITIAL = {
  isModalOpen: false,
  modalType: 0,
}

export default (state: any = INITIAL, action: any) => {
  switch (action.type) {
    case AUTH_TOGGLE_MODAL: {
      const { isOpen, type } = action.data;

      return { ...state, isModalOpen: isOpen, modalType: type }
    }

    case AUTH_MODAL_TYPE: {
      const { type } = action.data;

      return { ...state, modalType: type }
    }

    default: 
      return state;
  }
}