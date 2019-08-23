import { SET_CURRENT_USER, SIGNUP_CLICKED, LOGIN_SUCCESS } from '../types';
// import isEmpty from '../validation/is-empty';

const initialState = {
  isAuthenticated: false,
  user: {}
};

export default function (state = initialState, action) {
  switch (action.type) {

    case SIGNUP_CLICKED:
      return {
                // ...state, isAuthenticated:!isEmpty(action.payload),
        // user: action.payload
        ...state,user:action.payload
      }
    case SET_CURRENT_USER:
      return {
                // ...state, isAuthenticated:!isEmpty(action.payload),
        // user: action.payload
        ...state,
        user: action.payload
      }
    default:
      return state;
  }
}
