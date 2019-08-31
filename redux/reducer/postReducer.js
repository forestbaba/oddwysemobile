import {
  CREATE_POST, CREATE_POST_SUCCESSFUL,
  LOGIN_SUCCESS, GET_PERSONAL_POST_SUCCESSFUL,
  FETCH_SINGLE_POST_SUCCESSFUL,
  COMMENT_POSTED, COMMENT_POST_SUCCESSFUL
} from '../types';
import isEmpty from '../../utils/is-empty';

const initialState = {
  posts: [],
  post: {},
  comment:{}
};

export default function (state = initialState, action) {
  switch (action.type) {

    case CREATE_POST_SUCCESSFUL:
      return {
        ...state, post: action.payload
      }
    
    case GET_PERSONAL_POST_SUCCESSFUL: {
      return {
        ...state,
        posts: action.payload.post
      }
    }
    case FETCH_SINGLE_POST_SUCCESSFUL:
      return {
        ...state, post:action.payload
      
      }
    case COMMENT_POST_SUCCESSFUL: 
      return {
        ...state, 
        comment: action.payload
      }
    
    default:
      return state;
  }
}
