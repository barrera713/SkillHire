import { NEW_REVIEW } from './types'
import history from '../history';


export const createReview = (content, id) => dispatch => {
    console.log('inside review action', content, id)
    if(localStorage.token && localStorage.token !== "undefined")
    fetch(`http://localhost:3000/review/new/${id}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(content)
    })
    .then(res => res.json())
    .then(review => dispatch({
        type: NEW_REVIEW,
        payload: review
    }))
    else {
        window.alert("Only clients can submit reviews")
        history.push('/')
    }
}

