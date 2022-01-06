import {
  AUTH_ERROR,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  USER_LOADED,
} from '../../constants/authTypes.js';
import jwtDecode from 'jwt-decode';

const initialState = {
  token: null,
  isAuthenticated: null,
  loading: true,
  auth: null,
  _id: null,
};



export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case USER_LOADED:
      var user = jwtDecode(payload?.authtoken);
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        auth: payload,
        token: payload?.authtoken,
        _id: user !== null && user?._id,
      };

    case REGISTER_SUCCESS:
      user = jwtDecode(payload?.authtoken);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false,
        auth: payload,
        token: payload?.authtoken,
        _id: user !== null && user?._id,
      };
    case LOGIN_SUCCESS:
       user = jwtDecode(payload?.authtoken);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false,
        auth: payload,
        token: payload?.authtoken,
        _id: user !== null && user?._id,
      };
    case REGISTER_FAIL:
      return state;
    case AUTH_ERROR:
      return state;
    case LOGIN_FAIL:
      return state;
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        loading: false,
        auth: null,
        token: null,
        _id: null,
      };
    default:
      return state;
  }
}
