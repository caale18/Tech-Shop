import React, { Fragment } from 'react';
import '../../App.css';

const Header = () => {
  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <div className="navbar-brand">
            <img src="./images/logo.png" alt="Logo" className="img-fluid" style={{ maxWidth: '120px' }} />
          </div>

          <div className="collapse navbar-collapse">
            <div className="mx-auto col-md-6 mt-2 mt-md-0">
              <div className="input-group">
                <input
                  type="text"
                  id="search_field"
                  className="form-control"
                  placeholder="Buscar en Technicom ..."
                  aria-label="Search"
                />
                <div className="input-group-append">
                  <button id="search_btn" className="btn btn-primary">
                    <i className="fa fa-search" aria-hidden="true"></i>
                  </button>
                </div>
              </div>
            </div>

            <div className="d-flex align-items-center col-md-3 mt-4 mt-md-0 justify-content-end">
              <button className="btn btn-outline-primary" id="login_btn">Login</button>
              <div className="ml-4">
                <span id="cart" className="text-dark">
                  <i className="fa fa-shopping-cart"></i> Cart
                </span>
                <span className="badge badge-pill badge-primary ml-1" id="cart_count">2</span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default Header;
