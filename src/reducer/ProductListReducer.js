import { PRODUCT_LIST_REINIT, PRODUCT_LIST_UPDATE_LIST, PRODUCT_LIST_START_LOADING_NEXT_PAGE, PRODUCT_LIST_START_REINIT } from './types';

const INITIAL_STATE = {
    totalCount: 0,
    productList: [],
    nextPage: 1, 
    isThereMoreItems: true, 
    isLoadingNextPage: false, 
    isInitLoading: false
}
export const ProductListReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case PRODUCT_LIST_START_LOADING_NEXT_PAGE:
            return { ...state, isLoadingNextPage: true };
        case PRODUCT_LIST_START_REINIT:
            return { ...state, isInitLoading: true };;
        case PRODUCT_LIST_REINIT:
            var productList = prepareList([], action.payload.items);
            return { ...INITIAL_STATE, 
                productList, 
                isInitLoading: false,
                isThereMoreItems: isThereMoreItems(productList, action.payload.totalCount),
                totalCount: action.payload.totalCount, 
                nextPage: 2 };
        case PRODUCT_LIST_UPDATE_LIST:
            let nextPage = state.nextPage;
            nextPage++;
            return { ...state, 
                productList: prepareList(state.productList, action.payload.items),
                isLoadingNextPage: false,
                totalCount: action.payload.totalCount,  
                isThereMoreItems: isThereMoreItems(state.productList, totalCount),
                nextPage };
        default:
            return state;
    }
}
function prepareList(oldList, newList) {
    var newArray = [];
    newArray.push.apply(newArray, oldList);
    newArray.push.apply(newArray, newList);
    return newArray;
}
function isThereMoreItems(productList, totalCount){
    if(totalCount == productList.length){
        return false;
    }
    return true;
}
