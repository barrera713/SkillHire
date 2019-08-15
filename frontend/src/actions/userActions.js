import { NEW_USER } from './types';
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
    console.log('user created')
}



