import { combineReducers } from 'redux';
import { ProductReducer } from './ProductReducer';
import LoginReducer from './LoginReducer';

export default combineReducers({
    product: ProductReducer,
    login: LoginReducer,
});