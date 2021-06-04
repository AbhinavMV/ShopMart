import axios from "axios";

//initial state
const initialState = {
  loading: false,
  error: null,
  product: {},
};
//constants
const FETCH_PRODUCT_REQUEST = "FETCH_PRODUCT_REQUEST";
const FETCH_PRODUCT_SUCCESS = "FETCH_PRODUCT_SUCCESS";
const FETCH_PRODUCT_FAILURE = "FETCH_PRODUCT_FAILURE";

//actions
export const getProduct = (id) => async (dispatch, getState) => {
  dispatch({
    type: FETCH_PRODUCT_REQUEST,
  });
  try {
    const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);
    dispatch({
      type: FETCH_PRODUCT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: FETCH_PRODUCT_FAILURE,
      error,
    });
  }
};

//reducer
const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        product: action.payload,
      };
    case FETCH_PRODUCT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
export default productReducer;
