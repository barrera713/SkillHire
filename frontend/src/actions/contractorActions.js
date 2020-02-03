import { FETCH_CONTRACTORS, NEW_CONTRACTOR, CURRENT_USER } from './types';
import history from '../history';

const API = "https://mighty-ridge-68327.herokuapp.com";


export const fetchContractors = () => dispatch => {
    fetch(`${API}/freelancers`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    })
    .then( res => res.json())
    .then(contractors => dispatch({
        type: FETCH_CONTRACTORS,
        payload: contractors
    }));
}

export const createContractor = (contractorData ) => dispatch => {
    fetch(`${API}/start-earning`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(contractorData)
    })
    .then( res => res.json())
    .then( contractor => dispatch({
        type: NEW_CONTRACTOR,
        payload: contractor
    }))
    .then(() => {
        fetch(`${API}/login`, {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(contractorData)
        })
        .then( res => res.json())
        .then( user => {
            localStorage.setItem('token', user.auth_token)
            fetch('/current/user', {
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
    })
    history.push('/expertise')
    
}




