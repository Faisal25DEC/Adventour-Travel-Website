import {
  SET_BOOKING_DETAILS,
  SET_DATE_DETAILS,
  SET_GUESTS,
  SET_PRICE,
} from "./bookingTypes";

const initialState = {
  guests: 0,
  price: 0,
  from: "",
  to: "",
  bookedTill: "",
};

export const bookingReducer = (state, { type, payload }) => {
  switch (type) {
    case SET_GUESTS: {
      console.log(state.guests);
      return {
        ...state,
        guests: +state.guests + +payload ,
      };
    }
    case SET_PRICE: {
      return {
        ...state,
        price: state.guests * payload,
      };
    }
    case SET_DATE_DETAILS: {
      return {
        ...state,
        from: payload.fromDate,
        to: payload.lastDate,
        bookedTill: payload.bookedTill,
      };
    }
    case SET_BOOKING_DETAILS: {
      return {
        ...state,
        ...payload,
      };
    }
    default: {
      return initialState;
    }
  }
};
