import {
  ADDPRODUCTFAILED,
  GETPRODUCTSUCCESS,
  PRODUCT_LOAD,
} from "../const/productconst";

import { GETPRODUCTFAILED } from "./../const/productconst";

const stateInit = { loading: false, products: [], errors: null };

export const productReducer = (state = stateInit, { type, payload }) => {
  switch (type) {
    case PRODUCT_LOAD:
      return { ...state, loading: true };
    case GETPRODUCTSUCCESS:
      return { ...state, products: payload, loading: false };
    case GETPRODUCTFAILED:
      return { ...state, errors: payload, loading: false };
    case ADDPRODUCTFAILED:
      return { ...state, errors: payload };
    
    default:
      return state;
  }
};
