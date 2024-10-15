import React from 'react'

const Product = ({ product }) => {
  return (
    <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 mb-4">
        <div className="card h-100 shadow-sm">
            <img
                className="card-img-top"
                src={product.image || "https://m.media-amazon.com/images/I/617NtexaW2L._AC_UY218_.jpg"}
                alt={product.name}
                style={{ marginBottom: '1rem', padding: '5px' }}
            />
            <div className="card-body d-flex flex-column">
                <h5 className="card-title">
                    <button 
                        className="link-button text-primary"
                        style={{ background: 'none', border: 'none', textDecoration: 'none', cursor: 'pointer' }}>
                        {product.name}
                    </button>
                </h5>
                <div className="ratings mt-auto mb-2">
                    <div className="rating-outer">
                        <div className="rating-inner"></div>
                    </div>
                    <span className="text-muted">({product.numOfReviews} Reviews)</span>
                </div>
                <h6 className="card-text">Q.{product.price}</h6>
                <button 
                    id="view_btn" 
                    className="btn btn-primary btn-block mt-auto"
                    style={{ cursor: 'pointer' }}>
                    Ver Detalles
                </button>
            </div>
        </div>
    </div>
  )
}

export default Product