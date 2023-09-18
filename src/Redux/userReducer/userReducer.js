import {
  INITIATE_LOGIN,
  INITIATE_SIGNUP,
  LOGIN_USER,
  LOGOUT_USER,
  UPDATE_USER_BOOKINGS,
} from "./userTypes";

const initialState = {
  isAuth: false,
  userDetails: null,
  signUp: false,
};

export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case INITIATE_SIGNUP: {
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
    case INITIATE_LOGIN: {
      return {
        ...state,
        isAuth: false,
        userDetails: null,
        signUp: false,
      };
    }
    case UPDATE_USER_BOOKINGS: {
      return {
        ...state,
        userDetails: { ...payload },
      };
    }
    default: {
      return state;
    }
  }
};
