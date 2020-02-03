import { NEW_USER } from './types';
const API = "https://mighty-ridge-68327.herokuapp.com";


export const createUser = (userData) => dispatch => {
    fetch(`${API}/join`, {
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


