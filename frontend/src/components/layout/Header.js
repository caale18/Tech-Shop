import React, { Fragment } from 'react';
import '../../App.css';

const Header = () => {
  return (
    <Fragment>
      {/* inicio de la barra de navegacion */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
           {/* Sección de la marca/logo de la aplicación */}
          <div className="navbar-brand">
            {/* Imagen del logo con un estilo para ajustar su tamaño máximo */}
            <img src="./images/logo.png" alt="Logo" className="img-fluid" style={{ maxWidth: '120px' }} />
          </div>

           {/* Sección de la barra de búsqueda y otros elementos de la barra de navegación */}
          <div className="collapse navbar-collapse">
            {/* Contenedor de la barra de búsqueda centrado para pantallas medianas y grandes */}
            <div className="mx-auto col-md-6 mt-2 mt-md-0">
              <div className="input-group">
                {/* Campo de entrada para realizar búsquedas */}
                <input
                  type="text"
                  id="search_field"
                  className="form-control"
                  placeholder="Buscar en Technicom ..."
                  aria-label="Search"
                />
                 {/* Botón de búsqueda, que incluye un ícono de lupa */}
                <div className="input-group-append">
                  <button id="search_btn" className="btn btn-primary">
                    <i className="fa fa-search" aria-hidden="true"></i>
                  </button>
                </div>
              </div>
            </div>

            {/* Sección para el botón de login y el ícono del carrito de compras */}
            <div className="d-flex align-items-center col-md-3 mt-4 mt-md-0 justify-content-end">
               {/* Botón de login, que redirige a la página de inicio de sesión */}
              <button className="btn btn-outline-primary" id="login_btn">Login</button>

              {/* Contenedor del carrito de compras con un ícono y un contador de elementos */}
              <div className="ml-4">
                <span id="cart" className="text-dark">
                  <i className="fa fa-shopping-cart"></i> Cart
                </span>
                {/* Muestra el número de elementos en el carrito */}
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
