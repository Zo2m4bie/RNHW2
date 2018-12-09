import { combineReducers } from 'redux';
import NavigationReducer from './NavigatorReducer';
import { ProductReducer } from './ProductReducer';
import LoginReducer from './LoginReducer';

export default combineReducers({
    nav: NavigationReducer,
    product: ProductReducer,
    login: LoginReducer,
});