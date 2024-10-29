import React, { Fragment, useState } from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout }  from '../../actions/userActions';

import Search from './Search';

const Header = () => {
  const dispatch = useDispatch();
  const { user, loading } = useSelector((state) => state.auth);

  const logoutHandler  = () => {
    dispatch(logout());
  }


  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = (event) => {
    event.preventDefault(); // Evita la navegación del enlace
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <Fragment>
      {/* Inicio de la barra de navegación */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link to="/" className="navbar-brand btn btn-link" style={{ padding: 0 }}>
            <img src="/images/logo.png" alt="Logo" className="img-fluid" style={{ maxWidth: '120px' }} />
          </Link>

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
                <Search />
              </div>

              <div className="d-flex align-items-center ms-auto">
                <div className="d-flex align-items-center">
                  <Link to="/cart" style={{ textDecoration: 'none' }}>
                    <span id="cart" className="text-dark">
                      <i className="fa fa-shopping-cart"></i> Cart
                    </span>
                    <span className="badge bg-warning text-dark ms-2" id="cart_count">
                      2
                    </span>
                  </Link>
                </div>

                {user ? (
                  <div className="ml-4 dropdown d-inline">
                    <Link
                      to="#!"
                      className="btn dropdown-toggle text-black mr-4"
                      onClick={toggleDropdown}
                      id="dropDownMenuButton"
                      aria-haspopup="true"
                      aria-expanded={dropdownOpen ? 'true' : 'false'}
                    >
                      <figure className="avatar avatar-nav">
                        <img
                          src={user.avatar && user.avatar.url}
                          alt={user && user.name}
                          className="rounded-circle"
                        />
                      </figure>
                      <span>{user && user.name}</span>
                    </Link>

                    <div
                      className={`dropdown-menu${dropdownOpen ? ' show' : ''}`}
                      aria-labelledby="dropDownMenuButton"
                    >

                      {user && user.role !== 'admin' ? (
                        <Link className='dropdown-item' to="/orders/me">Orders</Link>
                      ) : (
                          <Link className='dropdown-item' to="/dashboard">Dashboard</Link>
                      )}

                      <Link  className="dropdown-item" to="/me">Profile</Link>

                      <Link className="dropdown-item text-danger" to="/" onClick={logoutHandler}>Logout</Link>
                      
                    </div>
                  </div>
                ) : (
                  !loading && (
                    <Link to="/login" className="btn btn-primary me-3" id="login_btn">
                      Login
                    </Link>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default Header;



