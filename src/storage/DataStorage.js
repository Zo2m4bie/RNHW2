import { AsyncStorage } from 'react-native';
const Buffer = require("buffer").Buffer;

const AUTH = "auth_data";
const LOGIN_AND_PATH = 2;

export const saveLoginAndPassword =  async (email, password) => {
    let encodedAuth = new Buffer(email + ':' + password).toString("base64");
    // Buffer.from("SGVsbG8gV29ybGQ=", 'base64').toString('ascii')
    await AsyncStorage.setItem(AUTH, encodedAuth);
}

export const getLoginAndPassword = async () => {
    // let encodedAuth = new Buffer(login + ':' + password).toString("base64");
    // Buffer.from("SGVsbG8gV29ybGQ=", 'base64').toString('ascii')
    AsyncStorage.getItem(AUTH).then(encodedAuth => {
        if(encodedAuth) {
            let emailPass = Buffer.from(encodedAuth, 'base64').toString('ascii');
            let splittedArray = emailPass.split(':');
            if(LOGIN_AND_PATH === splittedArray.length) {
                return {email: splittedArray[0], password: splittedArray[1]};
            }
        }
        return {};
    });
}