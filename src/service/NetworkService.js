import axios from 'axios';
const BASE_URL = 'http://ecsc00a02fb3.epam.com';
const LOGIN_URL = BASE_URL + '/index.php/rest/V1/integration/customer/token';
const PRODUCT_LIST = BASE_URL + '/rest/V1/products?searchCriteria[pageSize]=15&searchCriteria[currentPage]=';
const CREATE_BASKET = BASE_URL + '/rest/default/V1/carts/mine';
axios.interceptors.request.use(request => {
    console.log('Starting Request', request)
    return request
  });
  
  axios.interceptors.response.use(response => {
    console.log('Response:', response)
    return response
  });
export const login = (email, password) => {
    return axios.post(LOGIN_URL, {username: email, password});
}

export const loadPage = (pageNumber) => {
    let url = PRODUCT_LIST + pageNumber;
    return axios.get(url, { headers : { 'Content-Type': 'application/json' } });
}

export const createBasket = (token) => {
    return axios.post(CREATE_BASKET, { 
        headers : { 
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        } 
    });
}

export const addItemToBasket = (token, sku, quantity, quote_id) => {
    return axios.post(CREATE_BASKET, { 
        headers : { 
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        body : {
            sku,
            quantity, 
            quote_id
        }
    });
}