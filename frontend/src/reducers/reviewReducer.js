import { NEW_REVIEW } from '../actions/types';

const initialState = {
    newReview: ''
};

export default function(state = initialState, action) {
    switch (action.type) {
        case NEW_REVIEW: 
        return {
            ...state,
            newReview: { 
                ...action.payload,
                user: null // <- action.current_user,
            }
        };
        default:
        return state;
    }
}