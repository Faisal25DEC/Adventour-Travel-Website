import { combineReducers } from "redux";
import { productReducer } from "./productReducer/productReducer";
import { userReducer } from "./userReducer/userReducer";
import { bookingReducer } from "./bookingReducer/bookingReducer";
import { windowReducer } from "./windowReducer/windowReducer";

export const rootReducer = combineReducers({
  productReducer,
  userReducer,
  bookingReducer,
  windowReducer
});
