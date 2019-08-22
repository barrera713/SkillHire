import { NEW_REVIEW } from './types'



export const createReview = (content, id) => dispatch => {
    console.log('inside review action', content, id)
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
}

