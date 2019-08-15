import { THIS_USER } from '../actions/types';

const initialState = {
    present_user: {}
};


export default function(state = initialState, action) {
    switch (action.type) {
        case THIS_USER:
            return {
                ...state,
                present_user: action.payload
            };
            default:
            return state;
    }
}