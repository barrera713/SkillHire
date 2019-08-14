import { NEW_SKILL } from '../actions/types';

const initialState = {
    skills: [],
    skill: {}
};

export default function(state = initialState, action) {
    switch (action.type) {
        case NEW_SKILL:
            return {
                ...state,
                user: action.payload
            };
        default: 
        return state;
    }
}