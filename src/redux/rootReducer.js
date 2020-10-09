import { combineReducers } from 'redux';
import AuthReducer from './reducer/AuthReducer'
import CategoriesReducer from './reducer/CategoriesReducer'

export default combineReducers({
    auth: AuthReducer,
    categories: CategoriesReducer
});