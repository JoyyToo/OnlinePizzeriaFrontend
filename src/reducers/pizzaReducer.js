import {ADD_PIZZA, CATEGORY_PIZZAS, DELETE_PIZZA, PIZZA, UPDATE_PIZZA, CATEGORY_PIZZAS_FAIL} from "../constants/pizza";
import initialState from "./initialState"

export default function categoryReducer(state = initialState.pizzas, action) {
  switch(action.type) {
    case PIZZA:
      return action.pizzas;

    case CATEGORY_PIZZAS_FAIL:
      return initialState.pizzas;

    case CATEGORY_PIZZAS:
      return action.pizzas;

    case ADD_PIZZA:
      return {data: [
        ...state.data,
        Object.assign({}, action.pizzas)
      ]};

    case UPDATE_PIZZA:
      return {data: [
        ...state.data.filter(pizza => Number(pizza.id) !== Number(action.pizzas.id)),
        Object.assign({}, action.pizzas)
      ]};

    case DELETE_PIZZA:
      return {data: [
        ...state.data.filter(item => Number(item.id) !== Number(action.pizzas.id))
      ]};

    default:
      return state;
  }
}
