import { LOGIN_CHANGE_EMAIL, LOGIN_CHANGE_PASSWORD, LOGIN_RESET_DATA, USER_LOGED_IN } from './types';

const INITIAL_STATE = {
    login: '',
    password: '',
    userLogedIn: false
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
    }
    return state;
}