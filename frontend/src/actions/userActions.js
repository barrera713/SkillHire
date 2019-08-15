import { NEW_USER, CURRENT_USER } from './types';
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
    fetch('http://localhost:3000/current-user', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    })
    .then( res => res.json())
    .then( user => dispatch({
        type: CURRENT_USER,
        payload: user
    }))
      
}


