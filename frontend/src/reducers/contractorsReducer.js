import { NEW_CONTRACTOR, FETCH_CONTRACTORS, PROFILE_PAGE } from '../actions/types';

const initialState = {
    contractors: [],
    contractor: {},
    profileData: {}
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
        case PROFILE_PAGE:
            return {
                ...state,
                profileData: action.payload
            }
        default: 
        return state;
    }
}