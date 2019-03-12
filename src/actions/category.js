import {ADD_CATEGORY, CATEGORIES_LOADED, UPDATE_CATEGORY, DELETE_CATEGORY} from "../constants/category";
import axiosInstance from "../constants/AxiosCall"
import toastr from "toastr";

export function loadCategoriesSuccess(categories) {
  return {type: CATEGORIES_LOADED, categories};
}

export function addCategorySuccess(categories) {
  return {type: ADD_CATEGORY, categories};
}

export function updateCategorySuccess(categories) {
  return {type: UPDATE_CATEGORY, categories};
}

export function deleteCategorySuccess(categories) {
  return {type: DELETE_CATEGORY, categories};
}

export function getCategories() {
  return function(dispatch) {
    return axiosInstance.get(`categories`)
      .then(response => {
        dispatch(loadCategoriesSuccess(response.data));
        return response;
      });
  }
}

export function addCategory(data) {
  return function(dispatch) {
    axiosInstance.post(
      `categories`, data)
      .then(response => {
        dispatch(addCategorySuccess(response.data));
        toastr.success('Category added successfully');
        return response;
      }).catch((error) => {
      if (error.response) {
        toastr.error(error.response.data)
      }
    });
  }
}

export function updateCategory(data, id) {
  return function(dispatch) {
    axiosInstance.put(
      `categories/${id}`, data)
      .then(response => {
        dispatch(updateCategorySuccess({...data, id: id}));
        toastr.success(response.data["Message"]);
        return response;
      }).catch((error) => {
      if (error.response) {
        toastr.error(error.response.data)
      }
    });
  }
}

export function deleteCategory(id) {
  return function(dispatch) {
    return axiosInstance.delete(`categories/${id}`)
      .then(response => {
        dispatch(deleteCategorySuccess({id: id}));
        toastr.success(response.data["Message"]);
        return response;
      }).catch((error) => {
        if (error.response) {
          toastr.error(error.response.data["Message"])
        }
    });
  }
}
