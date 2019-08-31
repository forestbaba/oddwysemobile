import { SET_CURRENT_USER, SIGNUP_CLICKED, LOGIN_SUCCESS, GET_CURRENT_SUCCESSFUL } from '../types';
import isEmpty from '../../utils/is-empty';

const initialState = {
  isAuthenticated: false,
  user: {},
  fulluser:{}
};

export default function (state = initialState, action) {
  switch (action.type) {

    case SIGNUP_CLICKED:
      return {
        // ...state, isAuthenticated:!isEmpty(action.payload),
        // user: action.payload
        ...state, user: action.payload
      }
    case SET_CURRENT_USER:
      return {
        ...state, isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      }
    
    case GET_CURRENT_SUCCESSFUL:
      return {
        ...state, fulluser: action.payload
      }
    default:
      return state;
  }
}
