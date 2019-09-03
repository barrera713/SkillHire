import { PROFILE_PAGE, NEW_REVIEW } from '../actions/types';

const initialState = {
    data: { name: '', city: '', state: '', email: '', 
        reviews: [{ rating: 0, content: '', contractor_id: 0, user_id: 0, 
            user: { name: '', city: '', state: '', username: ''}
        }],
        skills: [{ id: 0, expertise: '', description: '', photographer: false, developer: false, designer: false, videoeditor: false }] 
    }
};


export default function(state = initialState, action) {
    switch (action.type) {
        case PROFILE_PAGE:
            return {
                ...state.data,
                data: action.payload
            };   
            case NEW_REVIEW: 
            console.log('ugabuga', action.payload)
            return {
                ...state,
                data: {
                    ...state.data,
                    reviews: [...state.data.reviews, action.payload]
                }
            };
        default: 
        return state;
    }
}

