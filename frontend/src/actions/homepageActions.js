import { CURRENT_USER } from './types'

const API = "https://mighty-ridge-68327.herokuapp.com";


export const userLogin = (info) => dispatch => {
    fetch(`${API}/login`, {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(info) 
    })
    .then(res => res.json())
    .then( user => localStorage.setItem('token', user.auth_token))
    .then( () => {
        fetch(`${API}/current/user`, {
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