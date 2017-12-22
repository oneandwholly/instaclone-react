import axios from 'axios';

import * as a from './actionTypes';

// other modules
import user_module from '../user';


// simple action creators
export const authenticate = () => ({
    type: a.AUTHENTICATE
});

export const addAuthUser = (auth_user) => ({
    type: a.ADD_USER,
    payload: auth_user
})


// thunks
export const signup = ({ username, email, password }) => {
    return (dispatch) => {
        axios.post(`${window.location.protocol}//${window.location.host}/api/auth/signup`, {
            username,
            email,
            password
          })
            .then(res => {
                console.log(res);
            })
    }
}

export const login = (username, password) => {
    return (dispatch) => {
        const delay = (t) =>
            new Promise((resolve) => { 
                setTimeout(resolve, t)
            });

        delay(1000).then(() => {
            // data: { token, user }
            // save token to localStorage
            // add user to user_module
            // add user to auth_user
            // authenticate
            dispatch(authenticate())
        })
    }
}