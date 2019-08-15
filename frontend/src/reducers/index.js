import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
import contractorsReducer from './contractorsReducer';
import reviewReducer from './reviewReducer';
import homepageReducer from './homepageReducer';

export default combineReducers({
    users: usersReducer,
    contractors: contractorsReducer,
    reviews: reviewReducer,
    current_user: homepageReducer
})  