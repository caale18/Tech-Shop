import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductDetails, clearErrors } from '../../actions/productActions';
import MetaData from '../layout/MetaData';
import Loader from '../layout/Loader';
import Error from '../layout/Error'; // Importa el componente Error
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { loading, error, product } = useSelector((state) => state.productDetails);
  const [quantity, setQuantity] = useState(1);

  const increaseQty = () => {
    if (quantity < product.stock) setQuantity(quantity + 1);
  };

  const decreaseQty = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  useEffect(() => {
    if (id) {
      dispatch(getProductDetails(id));
    }
    if (error) {
      dispatch(clearErrors());
    }
  }, [dispatch, id, error]);

  return (
    <Fragment>
      <MetaData title={product?.name || 'Product Details'} />

      {loading ? (
        <Loader />
      ) : (
        <div className="container my-5">
          {error ? (
            <Error message={error} /> // Usa el componente Error para mostrar el mensaje de error
          ) : (
            <div className="row justify-content-center">
              <div className="col-12 col-lg-5">
                <img 
                  src={product.image || "https://m.media-amazon.com/images/I/617NtexaW2L._AC_UY218_.jpg"} 
                  alt={product.name} 
                  className="img-fluid mb-4" 
                  height="500" 
                  width="500" 
                /> 
              </div>

              <div className="col-12 col-lg-6 mt-4 mt-lg-0">
                <h3 className="text-primary text-center">{product?.name}</h3>
                <p className="text-muted text-center" id="product_id">Producto # {product?._id}</p>

                <div className="ratings my-3 d-flex justify-content-center align-items-center">
                  <div className="rating-outer">
                    <div className="rating-inner" style={{ width: `${(product?.ratings / 5) * 100}%` }}></div>
                  </div>
                  <span className="ms-2" id="no_of_reviews">({product.numOfReviews} Reviews)</span>
                </div>

                <h4 className="text-success text-center mb-4" id="product_price">Q.{product?.price}</h4>

                <div className="stockCounter d-flex align-items-center justify-content-center mb-4">
                  <button className="btn btn-danger minus me-2" onClick={decreaseQty}>-</button>
                  <input 
                    type="number" 
                    className="form-control count text-center" 
                    value={quantity} 
                    readOnly 
                    style={{ maxWidth: '60px' }} 
                  />
                  <button className="btn btn-primary plus ms-2" onClick={increaseQty}>+</button>
                </div>

                <button 
                  type="button" 
                  id="cart_btn" 
                  className="btn btn-warning btn-block mb-3 text-white"
                >
                  Añadir al carro
                </button>

                <p className="text-center">Estado: <span className={product?.stock > 0 ? "text-success" : "text-danger"} id="stock_status">{product?.stock > 0 ? "In Stock" : "Out of Stock"}</span></p>

                <hr />

                <h4>Descripción:</h4>
                <p>{product?.description}</p>

                <p id="product_seller" className="mb-3">Vendido por: <strong>{product?.seller}</strong></p>
                
                <button 
                  id="review_btn" 
                  type="button" 
                  className="btn btn-primary mt-4" 
                  data-bs-toggle="modal" 
                  data-bs-target="#ratingModal"
                >
                  Envíe su reseña
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      <div className="modal fade" id="ratingModal" tabIndex="-1" role="dialog" aria-labelledby="ratingModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="ratingModalLabel">Enviar Reseña</h5>
              <button 
                type="button" 
                className="close" 
                data-bs-dismiss="modal" 
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <ul className="stars d-flex justify-content-center mb-3">
                <li className="star"><i className="fa fa-star"></i></li>
                <li className="star"><i className="fa fa-star"></i></li>
                <li className="star"><i className="fa fa-star"></i></li>
                <li className="star"><i className="fa fa-star"></i></li>
                <li className="star"><i className="fa fa-star"></i></li>
              </ul>

              <textarea 
                name="review" 
                id="review" 
                className="form-control mt-3" 
                rows="4" 
                placeholder="Escribe tu reseña aquí..."
              ></textarea>

              <button 
                className="btn btn-primary my-3 float-right review-btn px-4" 
                data-bs-dismiss="modal" 
                aria-label="Close"
              >
                Enviar
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductDetails;





