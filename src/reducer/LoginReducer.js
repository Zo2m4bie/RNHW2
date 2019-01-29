import { LOGIN_CHANGE_EMAIL, LOGIN_CHANGE_PASSWORD, LOGIN_RESET_DATA, 
    USER_LOGED_IN, LOGIN_ERROR, LOGIN_ERROR_HIDE, LOGIN_START_LOGIN, 
    LOGIN_ERROR_WRONG_FIELDS, LOGIN_ERROR_EMPTY_FIELDS, LOGIN_NO_NETWORK } from './types';
import { LayoutAnimation } from 'react-native';
import DeviceInfo from 'react-native-device-info';

const IOS = 'iOS';
const IPHONE = 'iPhone OS';

isApplePhone = () => {
    return DeviceInfo.getSystemName() === IOS || DeviceInfo.getSystemName() === IPHONE;
}

const INITIAL_STATE = {
    helloMessage: isApplePhone() ? 'Hello from apple device' : 'Hello from android device',
    login: '',
    password: '',
    userLogedIn: false,
    showLoginError: false,
    showProgress: false,
    oneOfFieldsEmpty: false,
    noInternetError: false
}
export default LoginReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case LOGIN_CHANGE_EMAIL:
            return { ...state, login: action.payload, oneOfFieldsEmpty: false, noInternetError: false };
        case LOGIN_CHANGE_PASSWORD:
            return { ...state, password: action.payload, oneOfFieldsEmpty: false, noInternetError: false };
        case LOGIN_RESET_DATA:
            return { ...state, INITIAL_STATE };
        case USER_LOGED_IN:
            return { ...INITIAL_STATE, userLogedIn: true, showProgress: false };
        case LOGIN_ERROR_HIDE:
            return { ...state, showLoginError: false, showProgress: false };
        case LOGIN_ERROR:
            return { ...state, showLoginError: true, showProgress: false };
        case LOGIN_START_LOGIN:
            return { ...state, showProgress: true, oneOfFieldsEmpty: false, noInternetError: false }
        case LOGIN_NO_NETWORK:
            return { ...state, noInternetError: true };
        case LOGIN_ERROR_EMPTY_FIELDS:
            LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
            return { ...state, showProgress: false, oneOfFieldsEmpty: true, noInternetError: false }
    }
    return state;
}