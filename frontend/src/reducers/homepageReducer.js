import { CURRENT_USER } from '../actions/types';

const initialState = {
    current_user: {}
};


export default function(state = initialState, action) {
    switch (action.type) {
        case CURRENT_USER:
            return {
                ...state,
                current_user: action.payload
            };
            default:
            return state;
    }
}