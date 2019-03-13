import { PIZZA, DELETE_PIZZA, UPDATE_PIZZA, ADD_PIZZA, CATEGORY_PIZZAS, CATEGORY_PIZZAS_FAIL } from "../constants/pizza";
import axiosInstance from "../constants/AxiosCall"
import toastr from "toastr";

export function loadPizzaSuccess(pizzas) {
  return {type: PIZZA, pizzas};
}

export function loadCategoryPizzaSuccess(pizzas) {
  return {type: CATEGORY_PIZZAS, pizzas};
}

export function loadCategoryPizzaFailure() {
  return {type: CATEGORY_PIZZAS_FAIL};
}

export function updatePizzaSuccess(pizzas) {
  return {type: UPDATE_PIZZA, pizzas};
}

export function addPizzaSuccess(pizzas) {
  return {type: ADD_PIZZA, pizzas};
}

export function deletePizzaSuccess(pizzas) {
  return {type: DELETE_PIZZA, pizzas};
}

export function getPizzas() {
  return function (dispatch) {
    return axiosInstance.get(`all_pizzas`)
      .then(response => {
        dispatch(loadPizzaSuccess(response.data));
        return response;
      }).catch((error) => {
        toastr.error(error.response.data["Message"]);
      })
  }
}

export function getCategoryPizzas(category_id) {
  return function (dispatch) {
    return axiosInstance.get(`/categories/${category_id}/pizzas`)
      .then(response => {
        dispatch(loadCategoryPizzaSuccess(response.data));
        return response;
      }).catch((error) => {
        if (error.response) {
          toastr.error(error.response.data["Message"]);
          dispatch(loadCategoryPizzaFailure())
        }
      })
  }
}

export function updatePizza(data, id) {
  return function(dispatch) {
    axiosInstance.put(
      `/pizzas/${id}`, data)
      .then(response => {
        dispatch(updatePizzaSuccess({...response.data, id: id}));
        toastr.success(response.data["Message"]);
        return response;
      }).catch((error) => {
      if (error.response) {
        toastr.error(error.response.data)
      }
    });
  }
}

export function addPizza(data, category_id) {
  let formData = new FormData();
  formData.append('image.url', data.image.file, data.name);
  formData.set('name', data.name)
  formData.set('price', data.price)
  formData.set('ingredients', data.ingredients)
  console.log('d', data)
  console.log(formData)

  return function(dispatch) {
    axiosInstance.post(
      `/categories/${category_id}/pizzas`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }})
      .then(response => {
        dispatch(addPizzaSuccess({...data, category_id: category_id}));
        toastr.success('New pizza added successfully');
        return response;
      }).catch((error) => {
      if (error.response) {
        toastr.error(error.response.data)
      }
    });
  }
}

export function deletePizza(id) {
  return function(dispatch) {
    return axiosInstance.delete(`/pizzas/${id}`)
      .then(response => {
        dispatch(deletePizzaSuccess({id: id}));
        toastr.success(response.data["Message"]);
        return response;
      }).catch((error) => {
        if (error.response) {
          toastr.error(error.response.data["Message"])
        }
      });
  }
}
