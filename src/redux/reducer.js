import {
  //PRODUCTS
  POST_ISSUE,
  GET_ISSUES,

} from "./action-type";

const initialState = {
  //CART
  incients: [],

};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
      //PRODUCTS
      case POST_ISSUE:
          return { ...state, incients: payload };
      case GET_ISSUES:
        return { ...state, incients: payload }

      default:
          return { ...state };
  }
};

export default reducer;