import { REGISTER } from "../constants/auth";
import { LOGIN } from "../constants/auth";
import { BASE_URL } from "../constants/index";
import axios from 'axios';
import toastr from 'toastr'

export function createUserSuccess(auth) {
  return {type: REGISTER, auth};
}

export function loginUserSuccess(auth) {
  return {type: LOGIN, auth}
}

export function register(data) {
  return function(dispatch) {
    axios.post(
      `${BASE_URL}/user`, data)
      .then(response => {
        dispatch(createUserSuccess(response.data));
        toastr.success('User created successfully');
        return response;
      }).catch((error) => {
      if (error.response) {
        toastr.error(error.response)
      }
  });
  }
}

export function login(data) {
  return function(dispatch) {
    axios.post(
      `${BASE_URL}/user/sign_in`, data)
      .then(response => {
        dispatch(loginUserSuccess(response.data));
        toastr.success('User logged in successfully');
        return response;
      }).catch((error) => {
      if (error.response) {
        toastr.error(error.response.data["Message"])
      }
    });
  }
}
