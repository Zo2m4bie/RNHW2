import { SELECT_PRODUCT } from '../reducer/ProductReducer';
import { PRODUCT_LIST_REINIT, PRODUCT_LIST_UPDATE_LIST } from '../reducer/types';

export const saveProduct = (product) => ({
    type: SELECT_PRODUCT,
    payload: product
})

export const reinitList = () => {
    let data = [
        {key: 'Header', type: 'Header'},
        {key: 'Product 1', image: require('../../assets/images/1.png')},
        {key: 'Product 2', image: require("../../assets/images/2.png")},
        {key: 'Product 3', image: require("../../assets/images/3.png")},
        {key: 'Product 4', image: require("../../assets/images/4.png")},
        {key: 'Product 5', image: require("../../assets/images/5.png")},
        {key: 'Product 6', image: require("../../assets/images/6.png")},
        {key: 'Product 7', image: require("../../assets/images/7.png")},
        {key: 'Product 8', image: require("../../assets/images/8.png")},
        {key: 'Product 9', image: require("../../assets/images/8.png")},
        {key: 'Product 10', image: require("../../assets/images/8.png")},
        {key: 'Product 11', image: require('../../assets/images/1.png')},
        {key: 'Product 12', image: require("../../assets/images/2.png")},
        {key: 'Product 13', image: require("../../assets/images/3.png")},
        {key: 'Product 14', image: require("../../assets/images/4.png")},
        {key: 'Product 15', image: require("../../assets/images/5.png")},
        {key: 'Product 16', image: require("../../assets/images/6.png")},
        {key: 'Product 17', image: require("../../assets/images/7.png")},
        {key: 'Product 18', image: require("../../assets/images/8.png")},
    ];
    return {
        type: PRODUCT_LIST_REINIT,
        payload: data
    }
}

export const loadNextPage = () => (dispatch, getState) => {
    let nextPage = getState().productList.nextPage;
    let data = [
        {key: nextPage + 'Product 1', image: require('../../assets/images/1.png')},
        {key: nextPage + 'Product 2', image: require("../../assets/images/2.png")},
        {key: nextPage + 'Product 3', image: require("../../assets/images/3.png")},
        {key: nextPage + 'Product 4', image: require("../../assets/images/4.png")},
        {key: nextPage + 'Product 5', image: require("../../assets/images/5.png")},
        {key: nextPage + 'Product 6', image: require("../../assets/images/6.png")},
        {key: nextPage + 'Product 7', image: require("../../assets/images/7.png")},
        {key: nextPage + 'Product 8', image: require("../../assets/images/8.png")},
        {key: nextPage + 'Product 9', image: require("../../assets/images/8.png")},
        {key: nextPage + 'Product 10', image: require("../../assets/images/8.png")},
        {key: nextPage + 'Product 11', image: require('../../assets/images/1.png')},
        {key: nextPage + 'Product 12', image: require("../../assets/images/2.png")},
        {key: nextPage + 'Product 13', image: require("../../assets/images/3.png")},
        {key: nextPage + 'Product 14', image: require("../../assets/images/4.png")},
        {key: nextPage + 'Product 15', image: require("../../assets/images/5.png")},
        {key: nextPage + 'Product 16', image: require("../../assets/images/6.png")},
        {key: nextPage + 'Product 17', image: require("../../assets/images/7.png")},
        {key: nextPage + 'Product 18', image: require("../../assets/images/8.png")},
    ];
    dispatch({
        type: PRODUCT_LIST_UPDATE_LIST,
        payload: data
    });
}
