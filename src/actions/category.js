import { CATEGORIES_LOADED } from "../constants/category";

export function loadCategoriesSuccess(categories) {
  return {type: CATEGORIES_LOADED, categories};
}

export function getCategories() {
  return function(dispatch) {
    return fetch("http://localhost:3000/categories")
    .then(response => response.json())
    .then(categories => {
        
      dispatch(loadCategoriesSuccess(categories));
    });
  }
}
