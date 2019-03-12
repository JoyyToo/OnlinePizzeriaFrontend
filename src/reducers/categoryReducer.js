import {
  ADD_CATEGORY,
  CATEGORIES_LOADED,
  DELETE_CATEGORY,
  UPDATE_CATEGORY
} from "../constants/category";
import initialState from "./initialState"

export default function categoryReducer(state = initialState.categories, action) {
    switch(action.type) {
      case CATEGORIES_LOADED:
        return action.categories;

      case ADD_CATEGORY:
        return [
          ...state,
          Object.assign({}, action.categories)
        ];

      case UPDATE_CATEGORY:
        return [
          ...state.filter(category => Number(category.id) !== Number(action.categories.id)),
          Object.assign({}, action.categories)
        ];

      case DELETE_CATEGORY:
        return [
          ...state.filter(item => Number(item.id) !== Number(action.categories.id))
        ];
  
      default:
        return state;
    }
  }
  