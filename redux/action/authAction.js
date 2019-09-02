import axios from "axios";
import {
    GET_ERRORS, SET_CURRENT_USER, LOGIN_CLICKED,
    SIGNUP_CLICKED, GET_CURRENT, GET_CURRENT_SUCCESSFUL
} from "../types";
import setAuthToken from "../../utils/setAuthToken";
// import jwt_decode from "jwt-decode";
import { AsyncStorage } from 'react-native';
import userDefaults from 'react-native-user-defaults'

axios.defaults.timeout = 5000;


// const BASE_URL = 'http://10.0.3.2:2000'
const BASE_URL = 'https://oddwyse.herokuapp.com'


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
            setAuthToken(token);
            console.log('The user data: ', res.data)


        })
        .catch(err => {
            console.log('/////////////////////////',err)
            if (axios.isCancel(err)) {
                console.log('<<<<<<<<<<<<<<<')
            }
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        }
        );
};


export const login = userData => dispatch => {

    const CancelToken = axios.CancelToken;
    let source = CancelToken.source();
    setTimeout(() => {
        source.cancel();
        // Timeout Logic
    }, 5000);

    axios
        .post(`${BASE_URL}/api/v1/user/login`,userData)
        .then((res) => {
            if (res.data) {
                console.log('Login successful: ', res)
                const { token } = res.data;
                setAuthToken(token);
                dispatch(setCurrentUser(token));
                console.log('User details i\m getting: ', res.data)
                AsyncStorage.setItem('user', JSON.stringify(res.data));


            }
            // localStorage.setItem("jwtToken", token);

            // const decoded = jwt_decode(token);

            //console.log('my data: ', res.data)
        })
        .catch(err =>
            // console.log("The error i'm getting: ", err.response.data)
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};

export const getCurrent = () => dispatch => {
    dispatch({
        type: GET_CURRENT
    })
    axios.get(`${BASE_URL}/api/v1/user/current`)
        .then(fulluser => {

            console.log('GET Full user: ', fulluser)

            dispatch({
                type: GET_CURRENT_SUCCESSFUL,
                payload: fulluser.data

            })
                .catch(err =>
                    dispatch({
                        type: GET_ERRORS,
                        payload: err.response.data
                    })
                )
        })
}
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