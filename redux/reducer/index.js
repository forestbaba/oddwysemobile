import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import userReducer from './userReducer';
// import profileReducer from './profileReducer';
import postReducer from './postReducer';

export default combineReducers({
    auth: authReducer,
    errors: errorReducer,
    users: userReducer,
    // profile: profileReducer,
    post: postReducer
});