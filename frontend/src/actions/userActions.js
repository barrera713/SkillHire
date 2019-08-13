import { NEW_USER, AUTHENTICATE_USER } from './types';
import history from '../history';

export const createUser = (userData) => dispatch => {
    fetch('http://localhost:3000/join', {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
    .then(res => res.json())
    .then(user => dispatch({
        type: NEW_USER,
        payload: user 
    }))
    .then(() => { history.push('/user-login')})
    console.log('user created')
}

export const authenticateUser = (loginData) => dispatch => {
    fetch('http://localhost:3000/user/authenticate', {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginData)
    })
    .then(res => res.json())
    .then( user => localStorage.setItem('token', user.auth_token))
    .then(usernamePassword => dispatch({
        type: AUTHENTICATE_USER,
        payload: usernamePassword
    }))
    console.log('login successful') 
}


