import React, { Fragment } from 'react'

const Home = () => {
  return (
    <Fragment>
        <h1 id="products_heading">Últimos Productos</h1>

        <section id="products" className="container mt-5">
            <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-3 my-3">
                    <div className="card p-3 rounded">
                        <img
                            className="card-img-top mx-auto"
                            src="https://m.media-amazon.com/images/I/617NtexaW2L._AC_UY218_.jpg"
                            alt="128GB Solid Storage Memory card - SanDisk Ultra"
                        />
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title">
                                {/* Cambiado <a> a <button> porque no hay un enlace real */}
                                <button className="link-button" style={{ background: 'none', border: 'none', color: '#007bff', textDecoration: 'underline', cursor: 'pointer' }}>
                                    128GB Solid Storage Memory card - SanDisk Ultra
                                </button>
                            </h5>
                            <div className="ratings mt-auto">
                                <div className="rating-outer">
                                    <div className="rating-inner"></div>
                                </div>
                                <span id="no_of_reviews">(5 Reviews)</span>
                            </div>
                            <p className="card-text">Q.45.67</p>
                            {/* Cambiado <a> a <button> */}
                            <button id="view_btn" className="btn btn-block" style={{ cursor: 'pointer' }}>
                                View Details
                            </button>
                        </div>
                    </div>
                </div>

                <div className="col-sm-12 col-md-6 col-lg-3 my-3">
                    <div className="card p-3 rounded">
                        <img
                            className="card-img-top mx-auto"
                            src="https://m.media-amazon.com/images/I/61B04f0ALWL._AC_UY218_.jpg"
                            alt="Wyze Cam 1080p HD Indoor Wireless Smart Home Camera"
                        />
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title">
                                {/* Cambiado <a> a <button> */}
                                <button className="link-button" style={{ background: 'none', border: 'none', color: '#007bff', textDecoration: 'underline', cursor: 'pointer' }}>
                                    Wyze Cam 1080p HD Indoor Wireless Smart Home Camera
                                </button>
                            </h5>
                            <div className="ratings mt-auto">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star-half-o"></i>
                                <i className="fa fa-star-o"></i>
                                <span id="no_of_reviews">(5 Reviews)</span>
                            </div>
                            <p className="card-text">Q.965.67</p>
                            {/* Cambiado <a> a <button> */}
                            <button id="view_btn" className="btn btn-block" style={{ cursor: 'pointer' }}>
                                View Details
                            </button>
                        </div>
                    </div>
                </div>

                <div className="col-sm-12 col-md-6 col-lg-3 my-3">
                    <div className="card p-3 rounded">
                        <img
                            className="card-img-top mx-auto"
                            src="https://m.media-amazon.com/images/I/813oF-FY01L._AC_UY218_.jpg"
                            alt="Fujifilm Instax Mini Instant Film Twin Pack"
                        />
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title">
                                {/* Cambiado <a> a <button> */}
                                <button className="link-button" style={{ background: 'none', border: 'none', color: '#007bff', textDecoration: 'underline', cursor: 'pointer' }}>
                                    Fujifilm Instax Mini Instant Film Twin Pack (White)
                                </button>
                            </h5>
                            <div className="ratings mt-auto">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star-half-o"></i>
                                <i className="fa fa-star-o"></i>
                                <span id="no_of_reviews">(5 Reviews)</span>
                            </div>
                            <p className="card-text">Q125.57</p>
                            {/* Cambiado <a> a <button> */}
                            <button id="view_btn" className="btn btn-block" style={{ cursor: 'pointer' }}>
                                View Details
                            </button>
                        </div>
                    </div>
                </div>

                <div className="col-sm-12 col-md-6 col-lg-3 my-3">
                    <div className="card p-3 rounded">
                        <img
                            className="card-img-top mx-auto"
                            src="https://m.media-amazon.com/images/I/61pBvlYVPxL._AC_UY218_.jpg"
                            alt="AmazonBasics High-Speed HDMI Cable"
                        />
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title">
                                {/* Cambiado <a> a <button> */}
                                <button className="link-button" style={{ background: 'none', border: 'none', color: '#007bff', textDecoration: 'underline', cursor: 'pointer' }}>
                                    AmazonBasics High-Speed HDMI Cable
                                </button>
                            </h5>
                            <div className="ratings mt-auto">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star-half-o"></i>
                                <i className="fa fa-star-o"></i>
                                <span id="no_of_reviews">(5 Reviews)</span>
                            </div>
                            <p className="card-text">Q75.56</p>
                            {/* Cambiado <a> a <button> */}
                            <button id="view_btn" className="btn btn-block" style={{ cursor: 'pointer' }}>
                                View Details
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </Fragment>
  )
}

export default Home