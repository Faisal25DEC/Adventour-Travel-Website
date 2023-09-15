import { combineReducers } from "redux";
import { productReducer } from "./productReducer/productReducer";
import { userReducer } from "./userReducer/userReducer";

export const rootReducer = combineReducers({
  productReducer,
  userReducer,
});
