import { NEW_CONTRACTOR, CURRENT_CONTRACTOR } from '../actions/types';

const initialState = {
    contractor: {},
    current_contractor: {}
};

export default function(state = initialState, action) {
    switch (action.type) {
        case NEW_CONTRACTOR:
            return {
                ...state,
                contractor: action.payload
            };
        case CURRENT_CONTRACTOR:
            return {
                ...state,
                current_contractor: action.payload
            }
        default: 
        return state;
    }
}