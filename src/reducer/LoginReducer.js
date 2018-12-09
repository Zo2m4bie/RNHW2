import { LOGIN_CHANGE_EMAIL, LOGIN_CHANGE_PASSWORD, LOGIN_RESET_DATA } from './types';

const INITIAL_STATE = {
    login: '',
    password: '',
}
export default LoginReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case LOGIN_CHANGE_EMAIL:
            return { ...state, login: action.payload };
        case LOGIN_CHANGE_PASSWORD:
            return { ...state, password: action.payload };
        case LOGIN_RESET_DATA:
            return { ...state, INITIAL_STATE };
    }
    return state;
}