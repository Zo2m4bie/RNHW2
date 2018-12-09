import { LOGIN_CHANGE_EMAIL, LOGIN_CHANGE_PASSWORD, LOGIN_RESET_DATA } from '../reducer/types';
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
    let email = state.login.email;
    let password = state.login.password;
    console.log(login);
    login(email, password).then(res => {
        console.log('Request success');
        console.log(res);
    }).catch(err => {
        console.log('Request error');
        console.log(err);

    });
}
