import axios from 'axios';
const LOGIN_URL = 'http://ecsc00a02fb3.epam.com/index.php/rest/V1/integration/customer/token';

export const login = (email, password) => {
    return axios.post(LOGIN_URL, {username: email, password});
}