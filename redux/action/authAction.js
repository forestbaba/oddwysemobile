import axios from "axios";
import { GET_ERRORS, SET_CURRENT_USER } from "./types";
// import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";

const BASE_URL = 'http://localhost:2000/'

export const signUp = userData => dispatch => {
    console.warn("Login is clickef")
    axios
        .post(`${BASE_URL}/api/v1/users/signup`, userData)
        .then(res => {
            // const { token } = res.data;
            // localStorage.setItem("jwtToken", token);
            // setAuthToken(token);

            // const decoded = jwt_decode(token);

            // dispatch(setCurrentUser(decoded));
            console.warn('The user data: ', userData)
        })
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};