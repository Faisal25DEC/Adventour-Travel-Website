import { LOGIN_USER, LOGOUT_USER, SIGNUP_USER } from "./userTypes";

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
  return createAction(SIGNUP_USER);
};
