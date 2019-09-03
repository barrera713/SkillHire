import { PROFILE_PAGE, NEW_REVIEW } from '../actions/types';

const initialState = {
    data: { id: 0, name: '', city: '', state: '', email: '', 
        reviews: [{id: 0, rating: 0, content: '', contractor_id: 0, user_id: 0, 
            user: { id: 0, name: '', city: '', state: '', username: ''}
        }],
        skills: [{ id: 0, expertise: '', description: '', photographer: false, developer: false, designer: false, videoeditor: false }] 
    }
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
                data: {

                }    
            };
        default: 
        return state;
    }
}

