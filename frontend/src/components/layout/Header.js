import React, { Fragment } from 'react';
import '../../App.css';

import Search from './Search';

const Header = () => {
  return (
    <Fragment>
      {/* Inicio de la barra de navegación */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <button className="navbar-brand btn btn-link" style={{ padding: 0 }}>
            <img 
              src="/images/logo.png" 
              alt="Logo" 
              className="img-fluid" 
              style={{ maxWidth: '120px' }} 
            />  
          </button>

          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarContent" 
            aria-controls="navbarContent" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarContent">
            <div className="d-flex flex-grow-1 align-items-center">
              <div className="col-12 col-md-8 col-lg-6 px-0">
                {/* Renderiza el componente Search directamente */}
                <Search />
              </div>

              <div className="d-flex align-items-center ms-auto">
                <button className="btn btn-outline-primary me-3" id="login_btn">
                  Login
                </button>

                <div className="d-flex align-items-center">
                  <span id="cart" className="text-dark">
                    <i className="fa fa-shopping-cart"></i> Cart
                  </span>
                  <span className="badge bg-primary ms-2" id="cart_count">2</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default Header;
