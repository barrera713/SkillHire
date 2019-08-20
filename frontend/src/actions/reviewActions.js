import { NEW_REVIEW, FETCH_REVIEWS } from './types'

export const fetchReviews = () => dispatch => {
    fetch('http://localhost:3000/reviews', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    })
    .then(res => res.json())
    .then(reviews => dispatch({
        type: FETCH_REVIEWS,
        payload: reviews
    }))
}


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

