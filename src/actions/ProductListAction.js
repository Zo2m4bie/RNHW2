import { loadPage } from '../service/NetworkService';
import { SELECT_PRODUCT } from '../reducer/ProductReducer';
import { PRODUCT_LIST_REINIT, PRODUCT_LIST_UPDATE_LIST, PRODUCT_LIST_START_LOADING_NEXT_PAGE, PRODUCT_LIST_START_REINIT } from '../reducer/types';

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
        items.map(item => result.push({key: "" + item.id, name: item.name, image: require('../../assets/images/1.png')}));
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
    /*let data = [
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
    });*/
}
