import { combineReducers } from 'redux';

import { productsReducer, selectedProductReducer } from './productsReducers';

const reducers = combineReducers({
  allProducts: productsReducer,
  product: selectedProductReducer
});

export default reducers;
