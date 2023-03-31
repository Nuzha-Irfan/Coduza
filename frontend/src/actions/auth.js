import setAuthToken from '../utils/setAuthToken';
import { setAlert } from './alert';
import axios from "axios";
import {
   
    USER_LOADED,
    AUTH_ERROR,
    GET_USER,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT
  } from './types';
import Swal from 'sweetalert2';

// Load User
export const loadUser = () => async (dispatch) => {
    if (localStorage.token) {
        setAuthToken(localStorage.token);
      }
    
      try {
        const res = await axios.get("/api/auth");
    
        dispatch({
          type: USER_LOADED,
          payload: res.data,
        });
      } catch (err) {
        dispatch({
          type: AUTH_ERROR,
        });
      }
};


// Login User
export const login = (email, password) => async (dispatch) => {
    const body = { email, password };
  
    try {
      const res = await axios.post('api/auth', body);
  
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      });
  
      dispatch(loadUser());
    } catch (err) {
      const errors = err.response.data.errors;
  
      if (errors) {
        errors.forEach((error) => dispatch(Swal.fire({
          icon: 'error',
          title:'Invalid login ',
          text: `${error.msg}`})));
      }
  
      dispatch({
        type: LOGIN_FAIL
      });
    }
  };
  
  export const logout = () => (dispatch) => {
    dispatch({ type: LOGOUT });
  };