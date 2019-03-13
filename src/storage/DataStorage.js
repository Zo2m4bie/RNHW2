import * as Keychain from 'react-native-keychain';

export const saveLoginAndPassword =  async (email, password) => {
    await Keychain.setGenericPassword(email, password);
}

export const getLoginAndPassword = async () => {
    const credentials = await Keychain.getGenericPassword();
    credentials.username
    credentials.password
    return {email: credentials.username, password: credentials.password};
}