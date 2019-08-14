import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
import contractorsReducer from './contractorsReducer';

export default combineReducers({
    userReducer: usersReducer,
    contractorReducer: contractorsReducer
})  