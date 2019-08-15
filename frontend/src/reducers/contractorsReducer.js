import { NEW_CONTRACTOR } from '../actions/types';

const initialState = {
    contractors: []
};

export default function(state = initialState, action) {
    switch (action.type) {
        case NEW_CONTRACTOR:
            return {
                ...state,
                contractor: action.payload
            };
        default: 
        return state;
    }
}