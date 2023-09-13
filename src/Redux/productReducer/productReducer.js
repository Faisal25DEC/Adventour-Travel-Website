import { GET_RANDOM_PRODUCTS } from "./productTypes";

const initialState = {
  productsPerPage: [],
  totalProducts: [],
  randomProducts: [],
  isLoading: false,
  isError: false,
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_RANDOM_PRODUCTS: {
      const tempRandomArray = [];
      for (let i = 0; i < 6; i++) {
        const idx = Math.floor(Math.random() * payload.length);
        tempRandomArray.push(payload[idx]);
      }
      console.log(tempRandomArray);
      return {
        ...state,
        randomProducts: tempRandomArray,
      };
    }
    default: {
      return state;
    }
  }
};
