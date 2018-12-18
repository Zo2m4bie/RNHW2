import { LOGIN_CHANGE_EMAIL, LOGIN_CHANGE_PASSWORD, LOGIN_RESET_DATA, USER_LOGED_IN, LOGIN_ERROR_HIDE, LOGIN_ERROR } from '../reducer/types';
import { login } from '../service/NetworkService';

export const changeEmail = (email) => ({
        type: LOGIN_CHANGE_EMAIL,
        payload: email
    })

export const changePassword = (password) => ({
        type: LOGIN_CHANGE_PASSWORD,
        payload: password
    })

export const resetLoginData = () => ({ type: LOGIN_RESET_DATA })

export const loginAction = () => (dispatch, getState) => {
    let state = getState();
    let email = state.login.login;
    let password = state.login.password;
    login(email, password).then(res => {
        if(res.status === 200) {
            dispatch({ type: USER_LOGED_IN });
        } else {
            dispatch({type: LOGIN_ERROR});
        }
    }).catch((err, res) => {
        dispatch({type: LOGIN_ERROR});
    });
}

export const hideError = () => ({
    type: LOGIN_ERROR_HIDE,
})
