import { combineReducers} from "redux";
import categories from "./categoryReducer";
import auth from "./authReducer"

const rootReducer = combineReducers({
  categories,
  auth
});

export default rootReducer;
