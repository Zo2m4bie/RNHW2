import { combineReducers } from 'redux';
import NavigationReducer from './NavigatorReducer';

export default combineReducers({
    nav: NavigationReducer,
});