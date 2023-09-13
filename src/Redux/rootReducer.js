import { combineReducers } from "redux";
import { productReducer } from "./productReducer/productReducer";

export const rootReducer = combineReducers({
  productReducer,
});
