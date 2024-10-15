import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { productReducers } from './reducers/productReducers';

const rootReducer = combineReducers({
  products: productReducers // Cambiar a "products" para que coincida con el useSelector en Home.js
});

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production', // Activa las devTools solo en desarrollo
});

export default store;