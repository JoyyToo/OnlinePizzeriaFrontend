import { CATEGORIES_LOADED } from "../constants/category";
import initialState from "./initialState"

export default function categoryReducer(state = initialState.categories, action) {
    switch(action.type) {
      case CATEGORIES_LOADED:
        return action.categories;
  
      default:
        return state;
    }
  }
  