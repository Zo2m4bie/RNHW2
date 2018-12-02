import { LOGIN, NAVIGATION } from './types';

const INITIAL_STATE = {
    currentpage: LOGIN
}
export default NavigationReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case NAVIGATION:
            return {currentpage: action.payload};
    }
    return state;
}