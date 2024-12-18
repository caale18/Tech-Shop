import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { productDetailsReducer, productReducers } from './reducers/productReducers';

import { authReducer, userReducer } from './reducers/userReducers';


const rootReducer = combineReducers({
  products: productReducers, // Cambiar a "products" para que coincida con el useSelector en Home.js
  productDetails: productDetailsReducer,
  auth:  authReducer,
  user: userReducer
});

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production', // Activa las devTools solo en desarrollo
});

export default store;