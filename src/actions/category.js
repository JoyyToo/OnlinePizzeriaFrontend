import { CATEGORIES_LOADED } from "../constants/category";
import { BASE_URL } from "../constants/index";
import axios from 'axios';

export function loadCategoriesSuccess(categories) {
  return {type: CATEGORIES_LOADED, categories};
}

export function getCategories() {
  return function(dispatch) {
    return axios.get(`${BASE_URL}/categories`)
      .then(response => {
        dispatch(loadCategoriesSuccess(response.data));
        return response;
      });
  }
}
