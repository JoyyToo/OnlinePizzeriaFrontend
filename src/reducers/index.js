import { DATA_LOADED } from "../constants/category";
import { ADD_CATEGORY } from "../constants/category"

const initialState = {
  categories: [],
  remoteCategories: []
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_CATEGORY) {
    return Object.assign({}, state, {
      categories: state.categories.concat(action.payload)
    });
  }

  if (action.type === DATA_LOADED) {
    return Object.assign({}, state, {
      remoteCategories: state.remoteCategories.concat(action.payload)
    });
  }
  return state;
}

export default rootReducer;
