import { FETCH_ALL_USER_SUCCESSFUL, LOGIN_SUCCESS,FOLLOW_USER_SUCCESSFUL } from '../types';
import isEmpty from '../../utils/is-empty';

const initialState = {
  users: [],
  user: {},
  message:{}
};

export default function (state = initialState, action) {
  switch (action.type) {

    case FETCH_ALL_USER_SUCCESSFUL:
      return {
        // ...state, isAuthenticated:!isEmpty(action.payload),
        // user: action.payload
        ...state, users: action.payload
      }
    case FOLLOW_USER_SUCCESSFUL:
      return {
        ...state, message: action.payload
      }
  
    default:
      return state;
  }
}
