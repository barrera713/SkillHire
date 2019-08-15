import { NEW_CONTRACTOR } from './types';
import history from '../history';


export const createContractor = (contractorData ) => dispatch => {
    fetch('http://localhost:3000/start-earning', {
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
    .then(()=> {
        fetch('http://localhost:3000/login', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(contractorData)
        })
        .then( res => res.json())
        .then( user => localStorage.setItem('token', user.auth_token))
        history.push('/expertise')
    })
}



