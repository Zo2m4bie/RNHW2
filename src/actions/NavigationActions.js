import { LOGIN, PRODUCT_LIST, PRODUCT_DETAILS, NAVIGATION } from '../reducer/types';

export const openLogin = () => {
    return navigateTo(LOGIN);
}

export const openProductList = () => {
    return navigateTo(PRODUCT_LIST);
}

export const openProductDetails = () => {
    return navigateTo(PRODUCT_DETAILS);
}

function navigateTo(text) {
    return{
        type: NAVIGATION,
        payload: text
    };
}