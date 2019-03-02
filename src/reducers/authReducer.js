import { REGISTER } from "../constants/auth"

const initialState = {
    newUser: [],
}

export default function authReducer(state = initialState, action) {
    switch(action.type) {
      case REGISTER:
        return Object.assign({}, state, {
            newUser: state.newUser.concat(action.payload)
        });
  
      default:
        return state;
    }
  }
  