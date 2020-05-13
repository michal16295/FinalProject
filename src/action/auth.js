import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  AUTH_ERROR,
  USER_LOADED,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
} from "./constants";
import http from "../services/httpService";
import { Redirect } from "react-router-dom";

const apiUrl = "http://localhost:5010";
const apiEndpoint = apiUrl + "/users";
const tokenKey = "token";

//GET CURRENT USER
export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    http.setJwt(localStorage.token);
  }
  try {
    const res = await http.get(apiEndpoint + "/me");
    dispatch({
      type: USER_LOADED,
      data: res.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};
//GET CURRENT TOKEN
export function getJwt() {
  return localStorage.getItem(tokenKey);
}

//REGISTER USER
export const register = (user) => async (dispatch) => {
  try {
    const res = await http.post(apiEndpoint + "/register", user);
    dispatch({
      type: REGISTER_SUCCESS,
      data: res.data,
    });
    localStorage.setItem("token", res.headers["x-auth-token"]);
    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data;

    dispatch({
      type: REGISTER_FAIL,
    });
  }
};
//LOGIN USER
export const login = (user) => async (dispatch) => {
  try {
    const res = await http.post(apiEndpoint + "/login", user);
    dispatch({
      type: LOGIN_SUCCESS,
      data: res.data,
    });
    localStorage.setItem("token", res.headers["x-auth-token"]);
    dispatch(loadUser());
  } catch (err) {
    dispatch({
      type: LOGIN_FAIL,
    });
  }
};
//LOGOUT
export const logout = () => async (dispatch) => {
  const res = await http.get(apiEndpoint + "/api/logout", {
    withCredentials: true,
  });
  window.location = "/";
  dispatch({
    type: LOGOUT_SUCCESS,
  });
};
