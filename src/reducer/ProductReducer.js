export const SELECT_PRODUCT = "SELECT_PRODUCT";

const INITIAL_STATE = {
    title: "",
    content: "",
}

export const ProductReducer = (state = INITIAL_STATE, action) => {
    if(SELECT_PRODUCT === action.type) {
        return {...INITIAL_STATE, title: action.payload.title};
    }
    return state;
}

export default {SELECT_PRODUCT, ProductReducer};