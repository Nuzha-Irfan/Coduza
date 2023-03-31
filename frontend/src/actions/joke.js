import axios from 'axios';
import { setAlert } from './alert';
import { GET_JOKE, GET_JOKES, JOKE_ERROR } from './types';

import Swal from 'sweetalert2';

// SUBMIT A JOKE
export const Submit = (formData, navigate) => async (dispatch) => {

    const api_key = "api_123_xyz_@";
    const config = {
      headers: {
        'Content-Type': 'application/json',
        "X-API-Key": api_key
      },
    };
   
  
    try {
      await axios.post('/api/joke', formData, config);
  
      dispatch(setAlert('Joke Submitted Success', 'success'));
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'The Joke has been submitted for review',
        showConfirmButton: false,
        timer: 1500,
      });
      
    } catch (err) {
      const errors = err.response.data.errors;
      if (errors) {
        errors.forEach((error) =>
          dispatch(
            Swal.fire({
              icon: 'error',
              title: 'Please Check Form ',
              text: `${error.msg}`,
            })
          )
        );
      }
    }
  };



//MODERATE JOKES

//delete joke
export const deleteJoke = (id) => async (dispatch) => {
    try {
      await axios.delete(`/api/joke/${id}`);
  
      
  
      const res = await axios.get('/api/joke');
  
      dispatch({
        type: GET_JOKES,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: JOKE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
};
  
  //update joke
  export const updateJokeByID =
    (ID, formData, navigate) => async (dispatch) => {
      try {
        const config = {
          headers: {
            'Content-Type': 'application/json',
          },
        };
  
         await axios.post(`/api/joke/${ID}`,{type:formData});
        dispatch(setAlert('Joke type Updated', 'success'));
        Swal.fire({
          position: 'top-middle',
          icon: 'success',
          title: 'The Joke type has been updated',
          showConfirmButton: true,
          timer: 1500,
        });
        const res =await axios.get(`/api/joke`);
        
        dispatch({
          type: GET_JOKES,
          payload: res.data,
        });

        
      } catch (err) {
        const errors = err.response.data.errors;
        if (errors) {
          errors.forEach((error) =>
            dispatch(
              Swal.fire({
                icon: 'error',
                title: 'Please Check Form ',
                text: `${error.msg}`,
              })
            )
          );
        }
      }
    };
  
// Get all jOKES
export const getjokes = () => async (dispatch) => {
    try {
      const res = await axios.get('/api/joke');
      dispatch({
        type: GET_JOKES,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: JOKE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
};


// Get Joke by id
export const getjokebyid = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/joke/${id}`);
    dispatch({
      type: GET_JOKE,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: JOKE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};


//Deliver Joke by type
export const getjokebytype = (type) => async (dispatch) => {
    try {
      const res = await axios.get(`/api/joke/${type}`);
  
      dispatch({
        type: GET_JOKES,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: JOKE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };
  
  