import { REGISTER } from "../constants/auth"
import initialState from "./initialState"

export default function authReducer(state = initialState.newUser, action) {
    switch(action.type) {
      case REGISTER:
        return [
        ...state,
        Object.assign({}, action.auth)
      ];
  
      default:
        return state;
    }
  }
  