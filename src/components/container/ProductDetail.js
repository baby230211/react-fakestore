import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';

import { fetchProduct, removeSelectedProduct } from '../../redux/actions';
import Spinner from '../../utils/Spinner';

const ProductDetail = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const product = useSelector(state => state.product);
  useEffect(() => {
    if (productId && productId !== '') dispatch(fetchProduct(productId));
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);
  const { image, title, price, category, description } = product;
  return (
    <div className="ui container">
      {Object.keys(product).length === 0 ? (
        <Spinner></Spinner>
      ) : (
        <div className="ui placeholder segment">
          <div className="ui stackable center aligned grid">
            <div className="middle grid-2 aligned row">
              <div className="container">
                <img className="ui fluid image" src={image} alt="" />
              </div>
              <div className=" detail-product">
                <h1>{title}</h1>
                <h2 className="my-1">${price}</h2>
                <h3 className="ui brown p my-1 header">{category}</h3>
                <p>{description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
