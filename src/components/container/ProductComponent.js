import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProductComponent = props => {
  const products = useSelector(state => state.allProducts.products);
  const renderList = products
    ? products.map(product => {
        const { id, title, image, price, category } = product;
        return (
          <div className="all-center" key={id}>
            <Link to={`/product/${id}`}>
              <div className="card">
                <div className="round-img">
                  <img src={image} alt={title} />
                </div>
                <div className="content text-left py">
                  <div className="header py">{title}</div>
                  <div className="meta price my-1">$ {price}</div>
                  <div className="meta ">{category}</div>
                </div>
              </div>
            </Link>
          </div>
        );
      })
    : '';
  return <>{renderList}</>;
};

export default ProductComponent;
