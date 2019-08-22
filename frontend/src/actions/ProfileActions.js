import { PROFILE_PAGE } from './types';


export const profile = (id) => dispatch => {
    console.log('fetching seller profile id:', id)
    fetch(`http://localhost:3000/profile/${id}`, {
        method: 'GET', 
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    })
    .then(res => res.json())
    .then(contractor => dispatch({
        type: PROFILE_PAGE, 
        payload: contractor
    }))
}