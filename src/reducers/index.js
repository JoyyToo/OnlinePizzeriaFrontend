import { combineReducers} from "redux";
import categories from "./categoryReducer";
import auth from "./authReducer"
import pizzas from  "./pizzaReducer"

const rootReducer = combineReducers({
  categories,
  auth,
  pizzas
});

export default rootReducer;
