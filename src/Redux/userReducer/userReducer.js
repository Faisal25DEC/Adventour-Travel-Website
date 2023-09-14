import { LOGIN_USER, LOGOUT_USER } from "./userTypes";

const initialState = {
  isAuth: false,
  userDetails: null,
};

export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
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
