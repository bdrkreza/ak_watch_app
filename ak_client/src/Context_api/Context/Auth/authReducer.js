import {
    AUTH_ERROR,
    LOGIN_FAILED,
    LOGIN_SUCCESS,
    LOGOUT,
    REGISTER_FAILED,
    REGISTER_SUCCESS,
    USER_LOADED
} from "../Types/Types";

const authReducer = (state, { type, payload }) => {
  switch (type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        user: payload,
      };
    case AUTH_ERROR:
      localStorage.removeItem("token");
      return {
        ...state,
        user: null,
        token: null,
        loading: false,
        isAuthenticated: null,
      };
    case REGISTER_SUCCESS:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        token: payload.token,
        isAuthenticated: true,
        loading: false,
      };
    case LOGIN_SUCCESS:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        token: payload.token,
        isAuthenticated: true,
        loading: false,
      };
    case REGISTER_FAILED:
      localStorage.removeItem("token");
      return {
        ...state,
        user: null,
        token: null,
        loading: false,
        isAuthenticated: null,
      };
    case LOGIN_FAILED:
      localStorage.removeItem("token");
      return {
        ...state,
        user: null,
        token: null,
        loading: false,
        isAuthenticated: null,
      };
    case LOGOUT:
      localStorage.removeItem("token");
      return {
        ...state,
        user: null,
        token: null,
        loading: false,
        isAuthenticated: null,
      };
    default:
      return state;
  }
};

export default authReducer;
