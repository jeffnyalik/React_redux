import { actionTypes } from "../constants/actionTypes";

export const setproduct = (products) =>{
    return {
        type: actionTypes.SET_PRODUCTS,
        payload: products,
    };
}

export const selectedProduct = (product) =>{
    return {
        type: actionTypes.SELECTED_PRODUCT,
        payload: product
    };
};