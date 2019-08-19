import { NEW_REVIEW, FETCH_REVIEWS } from '../actions/types';

const initialState = {
    reviews: [],
    review: {}
};

export default function(state = initialState, action) {
    switch (action.type) {
        case FETCH_REVIEWS:
            return {
                ...state,
                reviews: action.payload
            }
        case NEW_REVIEW: 
        return {
            ...state,
            review: action.payload
        };
        default:
        return state;
    }
}