import { NEW_USER, CURRENT_USER } from '../actions/types';

const initialState = {
    users: [],
    current_user: {}
};

export default function(state = initialState, action) {
    switch (action.type) {
        case NEW_USER:
            return {
                ...state,
                user: action.payload
            };
        case CURRENT_USER:
            return {
                ...state,
                current_user: action.payload
            };
        default: 
        return state;
    }
}