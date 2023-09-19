import {
  INITIATE_LOGIN,
  LOGIN_USER,
  LOGOUT_USER,
  INITIATE_SIGNUP,
  UPDATE_USER_BOOKINGS,
} from "./userTypes";

const createAction = (type, payload) => {
  return { type, payload };
};

export const loginUser = (user) => {
  return createAction(LOGIN_USER, user);
};
export const logoutUser = () => {
  return createAction(LOGOUT_USER);
};

export const initiateSignUp = () => {
  return createAction(INITIATE_SIGNUP);
};
export const initialLogin = () => {
  return createAction(INITIATE_LOGIN);
};

export const updateUser = (payload) => {
  return createAction(UPDATE_USER_BOOKINGS, payload);
};
