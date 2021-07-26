/* eslint-disable */
import React, { useReducer } from "react";
import apiUrl, { setAuthToken } from "../../api/api";
import { AUTH_ERROR, LOGIN_FAILED, LOGIN_SUCCESS, LOGOUT, REGISTER_FAILED, REGISTER_SUCCESS, USER_LOADED } from "../Types/Types";
import authContext from "./AuthContext";
import authReducer from "./authReducer";
  
  const AuthState = props => {
    const initialState = {
      loading: true,
      isAuthenticated: null,
      token: localStorage.getItem("token")
    };
  
    const [state, dispatch] = useReducer(authReducer, initialState);
  
    // Load User
    const loadUser = async () => {
      // Load token as global header
      if (localStorage.token) {
        setAuthToken(localStorage.token);
      }
  
      try {
        let { data } = await apiUrl.get("/api/users");
        dispatch({ type: USER_LOADED, payload: data });
      } catch ({ response }) {
        dispatch({ type: AUTH_ERROR });
        alert({ icon: "error", title: "Unauthenticated" });
      }
    };
  
    // Register User
    const register = async formData => {
      try {
        const { data } = await apiUrl.post("/api/users/register", formData);
        alert({ icon: "success", title: data.message });
  
        dispatch({
          type: REGISTER_SUCCESS,
          payload: data
        });
  
        alert({ icon: "success", title: data.message });
        //   loadUser();
      } catch ({ response }) {
        dispatch({ type: REGISTER_FAILED });
        alert({ icon: "error", title: response.data.message });
      }
    };
  
    // Login User
    const login = async formData => {
      try {
        const { data } = await apiUrl.post("/api/users", formData);
        dispatch({
          type: LOGIN_SUCCESS,
          payload: data
        });
        console.log({ icon: "success", title: data.message });
        //   loadUser();
      } catch ({ response }) {
        dispatch({ type: LOGIN_FAILED });
        console.log({ icon: "error", title: response.data.message });
      }
    };
  
    // Logout User
    const logout = () => dispatch({ type: LOGOUT });
  
    return (
      <authContext.Provider
        value={{
          // Methods
          login,
          logout,
          register,
          loadUser,
          // State values
          user: state.user,
          token: state.token,
          loading: state.loading,
          isAuthenticated: state.isAuthenticated
        }}
      >
        {props.children}
      </authContext.Provider>
    );
  };
  
  export default AuthState;
  