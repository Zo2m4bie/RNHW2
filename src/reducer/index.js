import { combineReducers } from 'redux';
import NavigationReducer from './NavigatorReducer';
import { ProductReducer } from './ProductReducer';

export default combineReducers({
    nav: NavigationReducer,
    product: ProductReducer,
});