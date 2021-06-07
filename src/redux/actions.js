import {
  SET_PRODUCTS,
  SELECTED_PRODUCT,
  REMOVE_SELECTED_PRODUCT,
  FETCH_PRODUCTS
} from './types';

import fakestoreapi from '../apis/fakeStoreApi';
export const fetchProducts = () => async (dispatch, getState) => {
  // products []
  const response = await fakestoreapi.get('/products');
  dispatch({
    type: FETCH_PRODUCTS,
    payload: response.data
  });
};
export const fetchProduct = id => async (dispatch, getState) => {
  // products []
  const response = await fakestoreapi.get(`/products/${id}`);
  dispatch({
    type: SELECTED_PRODUCT,
    payload: response.data
  });
};
export const setProducts = products => {
  // products []
  return {
    type: SET_PRODUCTS,
    payload: products
  };
};

export const selectedProduct = product => {
  // product {}

  return {
    type: SELECTED_PRODUCT,
    payload: product
  };
};

export const removeSelectedProduct = () => {
  return {
    type: REMOVE_SELECTED_PRODUCT
  };
};
