import admin from './adminReducer';
import user from './userReducer';
import { combineReducers } from 'redux'

export default combineReducers({
    admin,
    user
})