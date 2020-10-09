import { combineReducers } from 'redux';
import AuthReducer from './reducer/AuthReducer'

export default combineReducers({
    auth: AuthReducer
});