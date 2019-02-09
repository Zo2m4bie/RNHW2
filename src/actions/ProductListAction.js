import { loadPage, createBasket, addItemToBasket } from '../service/NetworkService';
import { SELECT_PRODUCT } from '../reducer/ProductReducer';
import { PRODUCT_LIST_REINIT, PRODUCT_LIST_ITEM_ADDED_TO_BASKET, PRODUCT_LIST_UPDATE_LIST, PRODUCT_LIST_START_LOADING_NEXT_PAGE, PRODUCT_LIST_START_REINIT } from '../reducer/types';
import { getLoginAndPasswordAndToken } from '../storage';

export const addToBasket = (product)  => (dispatch) => {
    getLoginAndPasswordAndToken().then((userData) => {
        console.log(userData);
        createBasket(userData.token).then(data => {
            console.log('BasketCreated');
            let quoteId = data.data;
            console.log(quoteId);
            addItemToBasket(product.sku, 1, quoteId, token).then(data2 => {
                console.log('Add item to basket');
                console.log(data2);
            });

        });
    });

    dispatch({ type: PRODUCT_LIST_ITEM_ADDED_TO_BASKET });
}

export const saveProduct = (product) => ({
    type: SELECT_PRODUCT,
    payload: product
})

export const reinitList = ()  => (dispatch) => {
    dispatch({ type: PRODUCT_LIST_START_REINIT });
    loadPage(1).then(data => {
        console.log(data);
        if(data.status != 200) {
            //TODO error
        }
        let result = [{key: 'Header', type: 'Header'}];
        let items =data.data.items;
        let totalCount = data.data.total_count;
        items.map(item => result.push({key: "" + item.id, name: item.name, image: require('../../assets/images/1.png'), sku: item.sku}));
        dispatch({
            type: PRODUCT_LIST_REINIT,
            payload: { items: result, totalCount }
        })
    }).catch(err => {
        //TODO error
    });
}

export const loadNextPage = () => (dispatch, getState) => {
    dispatch({ type: PRODUCT_LIST_START_LOADING_NEXT_PAGE });
    let nextPage = getState().productList.nextPage;
    loadPage(nextPage).then(data => {
        console.log(data);
        if(data.status != 200) {
            //TODO error
        }
        let result = [];
        let items =data.data.items;
        let totalCount = data.data.total_count;
        items.map(item => result.push({key: "" + item.id, name: item.name, image: require('../../assets/images/1.png')}));
        dispatch({
            type: PRODUCT_LIST_UPDATE_LIST,
            payload: { items: result, totalCount }
        });
    }).catch(err => {
        //TODO error
    });
    
}
