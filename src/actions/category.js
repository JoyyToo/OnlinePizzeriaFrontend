import { DATA_LOADED } from "../constants/category";

export function getCategories() {
  return function(dispatch) {
    return fetch("https://thawing-oasis-83740.herokuapp.com/categories")
    .then(response => response.json())
    .then(json => {
        
      dispatch({ type: DATA_LOADED, payload: json });
    });
  }
}
