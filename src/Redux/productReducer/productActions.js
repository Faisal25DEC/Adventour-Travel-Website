import axios from "axios";
import {
  GET_PRODUCT_FAILURE,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
  GET_RANDOM_PRODUCTS,
} from "./productTypes";

const createAction = (type, payload) => {
  return { type, payload };
};

const baseUrl = `http://localhost:8080`;

export const getProducts = (page) => async (dispatch) => {
  dispatch(createAction(GET_PRODUCT_REQUEST));
  const apiRes = axios
    .get(`${baseUrl}/touristDestinations?_page=${page}&_limit=9`)
    .then((res) => {
      console.log(res.data);
      dispatch(createAction(GET_PRODUCT_SUCCESS));
    })
    .catch(() => {
      dispatch(GET_PRODUCT_FAILURE);
    });
};
export const getRandomProducts = () => (dispatch) => {
  const apiRes = axios.get(`${baseUrl}/touristDestinations`).then((res) => {
    console.log(res.data);
    dispatch(createAction(GET_RANDOM_PRODUCTS, res.data));
  });
};
