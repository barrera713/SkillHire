import { PROFILE_PAGE } from './types';
import  history from '../history'

const API = "https://mighty-ridge-68327.herokuapp.com";


export const profile = (id) => dispatch => {
    console.log('fetching seller profile id:', id)
    if(localStorage.token && localStorage.token !== "undefined")
    fetch(`${API}/profile/${id}`, {
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
    else {
        window.alert("Must be login to view seller profile")
        history.push('/')
    }
}
