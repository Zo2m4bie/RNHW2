import { PRODUCT_LIST_REINIT, PRODUCT_LIST_UPDATE_LIST } from './types';

const INITIAL_STATE = {
    productList: [],
    nextPage: 1
}
export const ProductListReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case PRODUCT_LIST_REINIT:
            return { ...INITIAL_STATE, productList: action.payload };
        case PRODUCT_LIST_UPDATE_LIST:
            var newArray = [];
            newArray.push.apply(newArray, state.productList);
            newArray.push.apply(newArray, action.payload);
            let nextPage = state.nextPage;
            nextPage++;
            return { productList: newArray, nextPage };
        default:
            return state;
    }
}