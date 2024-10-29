import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product, col }) => {
  return (
    <div className={`col-sm-12 col-md-6 col-lg-${col} col-xl-3 mb-4`}>
      <div className="card h-100 shadow-sm">
        <img
          className="card-img-top"
          src={product.image || "https://m.media-amazon.com/images/I/617NtexaW2L._AC_UY218_.jpg"}
          alt={product.name}
          style={{ marginBottom: '1rem', padding: '5px' }}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">
            <Link 
              to={`/product/${product._id}`}
              className="link-button text-primary"
              style={{ textDecoration: 'none', cursor: 'pointer' }}
            >
              {product.name}
            </Link>
          </h5>
          <div className="ratings mt-auto mb-2 d-flex align-items-center">
            <div className="rating-outer">
              <div className="rating-inner" style={{ width: `${(product.ratings / 5) * 100}%` }}></div>
            </div>
            <span className="text-muted ms-2">({product.numOfReviews} Reviews)</span>
          </div>
          <h6 className="card-text text-success">Q.{product.price}</h6>
          <Link 
            to={`/product/${product._id}`}
            id="view_btn" 
            className="btn btn-primary btn-block mt-auto"
            style={{ cursor: 'pointer' }}
          >
            Ver Detalles
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
