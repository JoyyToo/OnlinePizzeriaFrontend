import { CATEGORIES_LOADED } from "../constants/category";

export function loadCategoriesSuccess(categories) {
  return {type: CATEGORIES_LOADED, categories};
}

export function getCategories() {
  return function(dispatch) {
    return fetch("https://thawing-oasis-83740.herokuapp.com/categories")
    .then(response => response.json())
    .then(categories => {
        
      dispatch(loadCategoriesSuccess(categories));
    });
  }
}
