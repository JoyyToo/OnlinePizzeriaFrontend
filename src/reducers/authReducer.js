import { REGISTER } from "../constants/auth"
import { LOGIN } from "../constants/auth";
import initialState from "./initialState"

export default function authReducer(state = initialState.user, action) {
    switch(action.type) {
      case REGISTER:
        return [
        ...state,
        Object.assign({}, action.auth)
      ];

      case LOGIN:
        return [
        ...state,
        Object.assign({}, action.auth)
      ];
  
      default:
        return state;
    }
  }
  