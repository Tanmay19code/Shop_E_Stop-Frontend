import { combineReducers } from "redux";
import authReducer from "./authReducers/authReducer";
import productReducer from "./productReducers/productReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  product: productReducer,
});

export default rootReducer;
