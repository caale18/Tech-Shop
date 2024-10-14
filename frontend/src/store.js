import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

// No se importa ningún reducer ya que no hay ninguno en este momento
const rootReducer = combineReducers({
  // Aquí puedes agregar tus reducers más tarde
});

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production', // Activa las devTools solo en desarrollo
});

export default store;