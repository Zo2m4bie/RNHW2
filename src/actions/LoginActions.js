import { LOGIN_CHANGE_EMAIL, LOGIN_CHANGE_PASSWORD, LOGIN_RESET_DATA, USER_LOGED_IN } from '../reducer/types';
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
        console.log(res);
        if(res.status === 200) {
            dispatch({ type: USER_LOGED_IN });
        } else {
            //todo handle error
        }
    }).catch((err, res) => {
        console.log('Request error');
        console.log(err);
        console.log(res);
        //todo handle error
    });
}
