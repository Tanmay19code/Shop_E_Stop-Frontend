import axios from "axios";
import {
  AUTH_ERROR,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  USER_LOADED,
} from "../constants/authTypes";
import setAuthToken from "../utils/setAuthToken";

// Load User
export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.post("http://localhost:5000/api/auth/getuser");

    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

// Register User
export const register =
  ({ name, email, password }) =>
  async (dispatch) => {
    const body = JSON.stringify({ name, email, password });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post(
        "http://localhost:5000/auth/create",
        body,
        config
      );

      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });

      // dispatch(loadUser());
    } catch (error) {
      // const { errors } = err.response.data;

      // if (errors) {
      //   errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
      // }

      dispatch({
        type: REGISTER_FAIL,
      });
    }
  };

// Login User
export const login = (email, password) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ email, password });

  // try {
  const res = await axios.post(
    "http://localhost:5000/api/auth/login",
    body,
    config
  );

  dispatch({
    type: LOGIN_SUCCESS,
    payload: res.data,
  });

  // localStorage.setItem('token', res.data.token);

  // dispatch(loadUser());
  // }
  // catch (error) {
  //   const { errors } = error.response.data;

  //   // if (errors) {
  //   //   errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
  //   // }

  //   dispatch({
  //     type: LOGIN_FAIL,
  //   });
  // }
};

// Logout / Clear Profile

export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT });
};
