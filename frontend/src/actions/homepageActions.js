import { CURRENT_USER } from './types'


export const userLogin = (info) => dispatch => {
    fetch('http://localhost:3000/login', {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(info) 
    })
    .then(res => res.json())
    .then( user => localStorage.setItem('token', user.auth_token))
    .then( () => {
        fetch('http://localhost:3000/current/user', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then( res => res.json())
        .then( current_user => dispatch({
            type: CURRENT_USER,
            payload: current_user
        }))

    })

}