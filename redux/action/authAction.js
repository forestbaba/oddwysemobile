import axios from "axios";
import { GET_ERRORS, SET_CURRENT_USER, LOGIN_CLICKED, SIGNUP_CLICKED } from "../types";
import setAuthToken from "../../utils/setAuthToken";
// import jwt_decode from "jwt-decode";
import { AsyncStorage } from 'react-native';


const BASE_URL = 'http://10.0.3.2:2000'

export const signUp = userData => dispatch => {
    dispatch({
        type: SIGNUP_CLICKED,
        payload: "Signup button initiated"
    })
    //  console.warn("LUser data", userData)
    axios
        .post(`${BASE_URL}/api/v1/user/signup`, userData)
        .then(res => {
            const { token } = res.data.data;
            // localStorage.setItem("jwtToken", token);
            // setAuthToken(token);

            // const decoded = jwt_decode(token);

            // dispatch(setCurrentUser(decoded));
            console.log('The user data: ', res.data)
           

        })
        .catch(err =>
            // console.log("The error i'm getting: ", err.response.data)
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};


export const login = userData => dispatch => {
    
    //  console.warn("LUser data", userData)
    axios
        .post(`${BASE_URL}/api/v1/user/login`, userData)
        .then(res => {
           
            const { token } = res.data.data;
            // localStorage.setItem("jwtToken", token);
            setAuthToken(token);

            // const decoded = jwt_decode(token);

            dispatch(setCurrentUser(token));
            console.log('Login successful: ', res)
            console.log('my data: ', res.data)
        })
        .catch(err =>
            // console.log("The error i'm getting: ", err.response.data)
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};

export const setCurrentUser = decoded => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    };
};
// const setCurrentUser =(data) =>{

//     console.log('the current user is ', data.data.token)
//     AsyncStorage.setItem(USER_TOKEN, data.data.token).then(responseDocs => {
//         console.log("YOU HAVE SUCCSFULLY LOGGED IN:", responseDocs)

//     })
//     dispatch({
//         type: LOGIN_SUCCESS,
//         payload: payload
//     })
// }