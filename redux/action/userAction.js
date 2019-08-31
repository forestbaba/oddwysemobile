import axios from 'axios'
import {
    FETCH_ALL_USER, FETCH_ALL_USER_SUCCESSFUL,
    BASE_URL, GET_ERRORS, FOLLOW_USER, FOLLOW_USER_SUCCESSFUL
} from '../types'

// const BASE_URLL = 'https://oddwyse.herokuapp.com'

export const fetchAllUser = () =>dispatch => {

    dispatch({
        type:FETCH_ALL_USER
    })

    axios.get(`${BASE_URL}/api/v1/user/getAllUsers`)
        .then(users => {
            console.log('Users', users)
            dispatch({
                type: FETCH_ALL_USER_SUCCESSFUL,
                payload:users.data
        })
        })
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
        })
    })

    
}

export const followUser = userid => dispatch => {
    dispatch({
        type:FOLLOW_USER
    })

    axios.post(`${BASE_URL}/api/v1/user/follow/${userid}`)
        .then(user => {
            if (user) {
                dispatch({
                    type: FOLLOW_USER_SUCCESSFUL,
                    payload: user.data
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