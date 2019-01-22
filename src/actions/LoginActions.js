import { LOGIN_CHANGE_EMAIL, LOGIN_CHANGE_PASSWORD, LOGIN_RESET_DATA, 
    USER_LOGED_IN, LOGIN_ERROR_HIDE, LOGIN_ERROR, LOGIN_ERROR_EMPTY_FIELDS, LOGIN_START_LOGIN, LOGIN_NO_NETWORK } from '../reducer/types';
import { login } from '../service/NetworkService';
import { saveLoginAndPassword } from '../storage';
import { NetInfo } from 'react-native';

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
    if(isEmpty(email) || isEmpty(password)){
        dispatch({ type: LOGIN_ERROR_EMPTY_FIELDS });
        return;
    }
    NetInfo.getConnectionInfo().then((connectionInfo) => {
        if(connectionInfo.type || connectionInfo.type === 'none'  || connectionInfo.type === 'unknown') {
            dispatch({ type: LOGIN_ERROR });
            return;
        }
        loginUser(email, password, dispatch);
    }).catch(err => {
        dispatch({ type: LOGIN_ERROR_EMPTY_FIELDS });
    });
}

function loginUser(email, password, dispatch){
    dispatch({ type: LOGIN_START_LOGIN });
    login(email, password).then(res => {
        if(res.status === 200) {
            await saveLoginAndPassword(email, password);
            dispatch({ type: USER_LOGED_IN });
        } else {
            dispatch({type: LOGIN_ERROR});
        }
    }).catch((err, res) => {
        dispatch({type: LOGIN_ERROR});
    });
}

function isEmpty(value) {
    if(value && value.trim().length != 0){
        return false;
    }
    return true;
}

export const hideError = () => ({
    type: LOGIN_ERROR_HIDE,
})
