import { combineReducers } from 'redux';
import { ProductReducer } from './ProductReducer';
import { ProductListReducer } from './ProductListReducer';
import LoginReducer from './LoginReducer';

export default combineReducers({
    product: ProductReducer,
    login: LoginReducer,
    productList: ProductListReducer,
});