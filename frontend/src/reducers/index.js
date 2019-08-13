import { combineReducers } from 'redux';
import createUserReducer from './createUserReducer'; 

export default combineReducers({
    createUser: createUserReducer
})  