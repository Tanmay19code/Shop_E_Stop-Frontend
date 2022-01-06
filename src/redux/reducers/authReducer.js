import {
  AUTH_ERROR,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  USER_LOADED,
} from '../constants/authTypes.js';

const initialState = {
  authType: null,
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  loading: true,
  auth: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        auth: payload,
      };

    case REGISTER_SUCCESS:
      localStorage.setItem('authType', 'jwtAuth');
    case LOGIN_SUCCESS:
      localStorage.setItem('authType', 'jwtAuth');
      console.log(payload);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false,
      };

    case REGISTER_FAIL:
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case LOGOUT:
      localStorage.removeItem('token');
      localStorage.removeItem('authType');
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
      };

    default:
      return state;
  }
}
