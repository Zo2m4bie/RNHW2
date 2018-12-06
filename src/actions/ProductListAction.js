import { SELECT_PRODUCT } from '../reducer/ProductReducer';

export const saveProduct = (product) => ({
    type: SELECT_PRODUCT,
    payload: product
})