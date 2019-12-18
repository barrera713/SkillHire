import { NEW_CONTRACTOR, FETCH_CONTRACTORS } from '../actions/types';

const initialState = {
    contractors: [],
    contractor: {},
    searchTerm: ''
};

export default function(state = initialState, action) {
    switch (action.type) {
        case FETCH_CONTRACTORS:
            return {
                ...state,
                contractors: action.payload
            };
        case NEW_CONTRACTOR:
            return {
                ...state,
                contractor: action.payload
            };
        default: 
        return state;
    }
}
