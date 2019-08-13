import { NEW_USER, AUTHENTICATE_USER } from '../actions/types';

const initialState = {
    users: [],
    user: {},
    loginInfo: {}
};

export default function(state = initialState, action) {
    switch (action.type) {
        case NEW_USER:
            return {
                ...state,
                user: action.payload
            };
        case AUTHENTICATE_USER:
            return {
                ...state,
                loginInfo: action.payload
            }
        default: 
        return state;
    }
}