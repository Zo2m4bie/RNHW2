import axios from 'axios';
const BASE_URL = 'http://ecsc00a02fb3.epam.com';
const LOGIN_URL = BASE_URL + '/index.php/rest/V1/integration/customer/token';
const PRODUCT_LIST = BASE_URL + '/rest/V1/products?searchCriteria[pageSize]=15&searchCriteria[currentPage]=';

export const login = (email, password) => {
    return axios.post(LOGIN_URL, {username: email, password});
}

export const loadPage = (pageNumber) => {
    let url = PRODUCT_LIST + pageNumber;
    return axios.get(url, { headers : { 'Content-Type': 'application/json' } });
}