import { NEW_REVIEW } from '../actions/types';

const initialState = {
    reviews: [],
    review: {}
};

export default function(state = initialState, action) {
    switch (action.type) {
        case NEW_REVIEW: 
        return {
            ...state,
            review: action.payload
        };
        default:
        return state;
    }
}