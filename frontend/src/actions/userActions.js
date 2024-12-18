import axios from 'axios';
import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL,
    LOAD_USER_REQUEST,
    LOAD_USER_SUCCESS,
    LOAD_USER_FAIL,
    UPDATE_PROFILE_REQUEST,
    UPDATE_PROFILE_SUCCESS,
    UPDATE_PROFILE_FAIL,
    UPDATE_PASSWORD_REQUEST,
    UPDATE_PASSWORD_SUCCESS,
    UPDATE_PASSWORD_FAIL,
    LOGOUT_SUCCESS,
    LOGOUT_FAIL,
    CLEAR_ERRORS
} from '../constants/userConstants';

// Login
export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({ type: LOGIN_REQUEST });

        const config = {
            headers: {
                'Content-Type': 'application/json',
            }
        };

        const { data } = await axios.post('/api/v1/login', { email, password }, config);

        dispatch({
            type: LOGIN_SUCCESS,
            payload: data.user,
        });
    } catch (error) {
        const errorMessage = error.response?.data?.message || 'Error en la solicitud';
        dispatch({
            type: LOGIN_FAIL,
            payload: errorMessage,
        });
    }
};

// Register User
export const register = (userData) => async (dispatch) => {
    try {
        dispatch({ type: REGISTER_USER_REQUEST });

        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        };

        const { data } = await axios.post('/api/v1/register',  userData, config);

        dispatch({
            type: REGISTER_USER_SUCCESS,
            payload: data.user,
        });
    } catch (error) {
        const errorMessage = error.response?.data?.message || 'Error en la solicitud';
        dispatch({
            type: REGISTER_USER_FAIL,
            payload: errorMessage,
        });
    }
};

// Load User 
export const loadUser = () => async (dispatch) => {
    try {
        dispatch({ type: LOAD_USER_REQUEST });

        const { data } = await axios.get('/api/v1/me');

        dispatch({
            type: LOAD_USER_SUCCESS,
            payload: data.user,
        });
    } catch (error) {
        const errorMessage = error.response?.data?.message || 'Error en la solicitud';
        console.error('Error en loadUser:', errorMessage);
        dispatch({
            type: LOAD_USER_FAIL,
            payload: errorMessage,
        });
    }
};

// Update profile
export const updateProfile = (userData) => async (dispatch) => {
    try {
        dispatch({ type: UPDATE_PROFILE_REQUEST });

        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        };

        const { data } = await axios.put('/api/v1/me/update',  userData, config);

        dispatch({
            type: UPDATE_PROFILE_SUCCESS,
            payload: data.success
        });
    } catch (error) {
        const errorMessage = error.response?.data?.message || 'Error en la solicitud';
        dispatch({
            type: UPDATE_PROFILE_FAIL,
            payload: errorMessage,
        });
    }
};

// Update Password
export const updatePassword = (passwords) => async (dispatch) => {
    try {
        dispatch({ type: UPDATE_PASSWORD_REQUEST });

        const config = {
            headers: {
                'Content-Type': 'application/json',
            }
        };

        const { data } = await axios.put('/api/v1/password/update',  passwords, config);

        dispatch({
            type: UPDATE_PASSWORD_SUCCESS,
            payload: data.success
        });
    } catch (error) {
        const errorMessage = error.response?.data?.message || 'Error en la solicitud';
        dispatch({
            type: UPDATE_PASSWORD_FAIL,
            payload: errorMessage,
        });
    }
};

// Logout User 
export const logout = () => async (dispatch) => {
    try {

        await axios.get('/api/v1/logout');

        dispatch({
            type: LOGOUT_SUCCESS,
        });

    } catch (error) {
        dispatch({
            type: LOGOUT_FAIL,
            payload: error.response.data.message
        });
    }
};

// Limpiar errores
export const clearErrors = () => (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
};

