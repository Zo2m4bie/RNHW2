export const SELECT_PRODUCT = "SELECT_PRODUCT";

const INITIAL_STATE = {
    title: "",
    image: {},
}

export const ProductReducer = (state = INITIAL_STATE, action) => {
    if(SELECT_PRODUCT === action.type) {
        return {...INITIAL_STATE, title: action.payload.key, image: action.payload.image };
    }
    return state;
}
