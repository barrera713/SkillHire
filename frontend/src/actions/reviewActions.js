import { NEW_REVIEW } from './types'


export const createReview = (content) => dispatch => {
    console.log('in action')
    //contractor id needed
    fetch('http://localhost:3000/review/new/:contractor_id', {
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
}