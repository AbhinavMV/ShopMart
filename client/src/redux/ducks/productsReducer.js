import axios from "axios";

//initial state
const initialState = {
  loading: false,
  error: null,
  products: [],
};

//constants
const FETCH_PRODUCTS_REQUEST = "FETCH_PRODUCTS_REQUEST";
const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";
const FETCH_PRODUCTS_FAILURE = "FETCH_PRODUCTS_FAILURE";

//actions
export const getProducts = () => async (dispatch, getState) => {
  dispatch({
    type: FETCH_PRODUCTS_REQUEST,
  });
  try {
    const { data } = await axios.get("https://fakestoreapi.com/products");
    dispatch({
      type: FETCH_PRODUCTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: FETCH_PRODUCTS_FAILURE,
      error: error,
    });
  }
};
//reducer
const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
      };
    case FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
export default productsReducer;
