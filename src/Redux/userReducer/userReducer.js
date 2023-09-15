import { LOGIN_USER, LOGOUT_USER, SIGNUP_USER } from "./userTypes";

const initialState = {
  isAuth: false,
  userDetails: null,
  signUp: false,
};

export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SIGNUP_USER: {
      return {
        ...state,
        isAuth: false,
        userDetails: null,
        signUp: true,
      };
    }
    case LOGIN_USER: {
      return {
        ...state,
        isAuth: true,
        userDetails: payload,
      };
    }
    case LOGOUT_USER: {
      return {
        ...state,
        isAuth: false,
        userDetails: null,
      };
    }
    default: {
      return state;
    }
  }
};
