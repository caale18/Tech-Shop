import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import React from 'react';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './components/Home';
import ProductDetails from './components/product/ProductDetails';
import Login from './components/user/Login';
import Register from './components/user/Register';
import Profile from './components/user/Profile';

import ProtectedRoute from './components/route/ProtectedRoute';
import { loadUser } from './actions/userActions';
import store from './store';
import UpdateProfile from './components/user/UpdateProfile';
import UpdatePassword from './components/user/UpdatePassword';

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container container-fluid">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search/:keyword" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* Envolviendo rutas protegidas */}
            <Route element={<ProtectedRoute />}>
              <Route path="/me" element={<Profile />} />
            </Route>

            {/* Envolviendo rutas protegidas */}
            <Route element={<ProtectedRoute />}>
              <Route path="/me/update" element={<UpdateProfile />} />
            </Route>

            {/* Envolviendo rutas protegidas */}
            <Route element={<ProtectedRoute />}>
              <Route path="/password/update" element={<UpdatePassword />} />
            </Route>
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

