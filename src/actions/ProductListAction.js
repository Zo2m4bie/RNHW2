import { SELECT_PRODUCT } from '../reducer/ProductReducer';

export const saveProduct = (product) => {
    console.log(product);
    return {
        type: SELECT_PRODUCT,
        payload: product
    }
}