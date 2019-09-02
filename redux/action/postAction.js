import axios from "axios";
import {
    GET_ERRORS, CREATE_POST_SUCCESSFUL,
    CREATE_POST, GETTING_PERSONAL_POST, GET_PERSONAL_POST_SUCCESSFUL,
    FETCH_SINGLE_POST_SUCCESSFUL, FETCH_SINGLE_POST,
    COMMENT_POST_SUCCESSFUL,COMMENT_POSTED
} from "../types";
import setAuthToken from "../../utils/setAuthToken";
// import jwt_decode from "jwt-decode";
import { AsyncStorage } from 'react-native';


// const BASE_URL = 'http://10.0.3.2:2000'
const BASE_URL = 'https://oddwyse.herokuapp.com'

export const createPost = postData => dispatch => {
    dispatch({
        type: CREATE_POST,
        payload: "Signup button initiated"
    })
    //  console.warn("LUser data", userData)
    axios
        .post(`${BASE_URL}/api/v1/post`, postData)
        .then(res => {

            dispatch({
                type: CREATE_POST_SUCCESSFUL,
                payload: res.data
            })

        })
        .catch(err =>
            // console.log("The error i'm getting: ", err.response.data)
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};

export const getPersonalPost = () => dispatch => {
    dispatch({
        type: GETTING_PERSONAL_POST
    })
    axios.get(`${BASE_URL}/api/v1/post/personal`)
        .then(posts => {
            if (posts) {

                dispatch({
                    type: GET_PERSONAL_POST_SUCCESSFUL,
                    payload: posts.data
                })
            }
        })
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        })
}

export const fetchSinglePost = (postid) => dispatch => {

    dispatch({
        type: FETCH_SINGLE_POST,
    })
    axios.get(`${BASE_URL}/api/v1/post/findpost/${postid}`)
        .then(post => {

            console.log('Single clicked post: ', post.data.text)
            dispatch({
                type: FETCH_SINGLE_POST_SUCCESSFUL,
                payload: post.data
            })

        })
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        })

}

export const postComment = (comment) => dispatch => {
    dispatch({
        type:COMMENT_POSTED
    })
    axios.post(`${BASE_URL}/api/v1/post/comment`, comment)
        .then(comment => {
            if (comment) {
                dispatch({
                    type: COMMENT_POST_SUCCESSFUL,
                    payload:comment.data
                })
            }
        })
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload:err.response.data
        })
    })
}