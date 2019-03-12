import { REGISTER, LOGIN } from "../constants/auth";
import axiosInstance from "../constants/AxiosCall"
import toastr from 'toastr'

export function createUserSuccess(auth) {
  return {type: REGISTER, auth};
}

export function loginUserSuccess(auth) {
  return {type: LOGIN, auth}
}

export function register(data) {
  return function(dispatch) {
    axiosInstance.post(
      `user`, data)
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
    axiosInstance.post(
      `user/sign_in`, data)
      .then(response => {
        dispatch(loginUserSuccess(response.data));
        localStorage.setItem('token', response.data.token);
        toastr.success('User logged in successfully');
        return response;
      }).catch((error) => {
      if (error.response) {
        toastr.error(error.response.data["Message"])
      }
    });
  }
}
