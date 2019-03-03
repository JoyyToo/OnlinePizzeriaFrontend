import { REGISTER } from "../constants/auth";

export function createUserSuccess(auth) {
  return {type: REGISTER, auth};
}

export function register(data) {
  return function(dispatch) {
    return fetch("http://localhost:3000/user", 
    {
      method: 'POST', 
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then((response) => {
      response.json()
    }).then(auth => { 
      dispatch(createUserSuccess(auth));
    }).catch(error => {
      throw(error);
  });
}
}
