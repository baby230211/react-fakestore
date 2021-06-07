import React, { useEffect, useCallback, userMemo } from 'react';

import axios from 'axios';

import { useDispatch, useSelector } from 'react-redux';

// import React Actions
import { setProducts, fetchProducts } from '../../redux/actions';

import ProductComponent from './ProductComponent';

const ProductListing = () => {
  const products = useSelector(globalState => globalState.allProducts.products);

  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  console.log('Products', products);

  return (
    <div className="container grid-4">
      <ProductComponent />
    </div>
  );
};

export default ProductListing;
