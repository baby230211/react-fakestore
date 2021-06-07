import {
  SET_PRODUCTS,
  SELECTED_PRODUCT,
  REMOVE_SELECTED_PRODUCT,
  FETCH_PRODUCTS
} from './types';

const initialState = {};

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        products: action.payload
      };
    case FETCH_PRODUCTS:
      return {
        ...state,
        products: action.payload
      };
    default:
      return state;
  }
};

export const selectedProductReducer = (state = {}, action) => {
  switch (action.type) {
    case SELECTED_PRODUCT:
      return {
        ...state,
        ...action.payload
      };
    case REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};
