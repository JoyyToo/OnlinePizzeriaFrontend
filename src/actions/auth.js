import { REGISTER } from "../constants/auth";

export function register() {
  return function(dispatch) {
    return fetch("https://thawing-oasis-83740.herokuapp.com/user")
    .then(response => response.json())
    .then(json => { 
      dispatch({ type: "REGISTER", payload: json });
    });
  }
}
