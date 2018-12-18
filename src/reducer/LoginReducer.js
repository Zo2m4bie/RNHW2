import { LOGIN_CHANGE_EMAIL, LOGIN_CHANGE_PASSWORD, LOGIN_RESET_DATA, USER_LOGED_IN, LOGIN_ERROR, LOGIN_ERROR_HIDE } from './types';

const INITIAL_STATE = {
    login: '',
    password: '',
    userLogedIn: false,
    showLoginError: false,
}
export default LoginReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case LOGIN_CHANGE_EMAIL:
            return { ...state, login: action.payload };
        case LOGIN_CHANGE_PASSWORD:
            return { ...state, password: action.payload };
        case LOGIN_RESET_DATA:
            return { ...state, INITIAL_STATE };
        case USER_LOGED_IN:
            return { ...INITIAL_STATE, userLogedIn: true };
        case LOGIN_ERROR_HIDE:
        return { ...state, showLoginError: false };
        case LOGIN_ERROR:
            return { ...state, showLoginError: true };
    }
    return state;
}