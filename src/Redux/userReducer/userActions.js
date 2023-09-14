import { LOGIN_USER, LOGOUT_USER } from "./userTypes";

const createAction = (type, payload) => {
  return { type, payload };
};

export const loginUser = (user) => {
  return createAction(LOGIN_USER, user);
};
export const logoutUser = () => {
  return createAction(LOGOUT_USER);
};
