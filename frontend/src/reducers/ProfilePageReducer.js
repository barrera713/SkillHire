import { PROFILE_PAGE, NEW_REVIEW } from '../actions/types';

const initialState = {
    data: [ { seller: [], skills: {}, reviews: {}, clients: [] } ]
};


export default function(state = initialState, action) {
    switch (action.type) {
        case PROFILE_PAGE:
            return {
                ...state,
                data: action.payload
            };   
            case NEW_REVIEW: 
            // console.log('ugabuga', action.payload)
            return {
                ...state,
                data: [
                    state.data[0],
                    {
                        ...state.data[1],
                        reviews: [...state.data[1].reviews, action.payload] 
                    }
                ]
            };
        default: 
        return state;
    }
}

