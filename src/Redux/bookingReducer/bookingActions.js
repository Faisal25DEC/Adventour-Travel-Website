import { SET_DATE_DETAILS, SET_GUESTS, SET_PRICE } from "./bookingTypes";

const createAction = (type, payload) => {
  return { type, payload };
};

export const setGuests = (payload) => {
  return createAction(SET_GUESTS, payload);
};

export const setPrice = (payload) => {
  return createAction(SET_PRICE, payload);
};
export const setDateDetails = (payload) => {
  return createAction(SET_DATE_DETAILS, payload);
};
