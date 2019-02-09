import { AsyncStorage } from 'react-native';

const Buffer = require("buffer").Buffer;

const AUTH = "auth_data";
const LOGIN_AND_PATH = 2;

export const saveLoginAndPasswordAndToken =  async (email, password, token) => {
    let encodedAuth = new Buffer(email + ':' + password + ':' + token).toString("base64");
    // Buffer.from("SGVsbG8gV29ybGQ=", 'base64').toString('ascii')
    await AsyncStorage.setItem(AUTH, encodedAuth);
}

export const getLoginAndPasswordAndToken = async () => {
    // let encodedAuth = new Buffer(login + ':' + password).toString("base64");
    // Buffer.from("SGVsbG8gV29ybGQ=", 'base64').toString('ascii')
    return AsyncStorage.getItem(AUTH).then(encodedAuth => {
        console.log(encodedAuth);
        if(encodedAuth) {
            let emailPass = Buffer.from(encodedAuth, 'base64').toString('ascii');
            let splittedArray = emailPass.split(':');
            if(LOGIN_AND_PATH === splittedArray.length) {
                return {email: splittedArray[0], password: splittedArray[1], token: splittedArray[2]};
            }
        }
        return {};
    });
}