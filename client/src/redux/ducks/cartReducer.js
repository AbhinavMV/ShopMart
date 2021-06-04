//initial state
const initialState = {
  loading: false,
  error: null,
  cartItems: [],
};

//constants
const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";
const UPDATE_QUANTITY_CART = "UPDATE_QUANTITY_CART";

//action Creators
export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};

export const removeFromCart = (product) => {
  return {
    type: REMOVE_FROM_CART,
    payload: product,
  };
};

export const updateQty = (update, id) => {
  return {
    type: UPDATE_QUANTITY_CART,
    id: id,
    update: update,
  };
};

//reducers
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      let product = action.payload;
      const exists = state.cartItems.find((obj) => obj.id === product.id);
      console.log(exists);
      if (!("qty" in product)) {
        product.qty = 1;
      } else if (exists && "qty" in exists) {
        if (exists.qty === product.qty) return state;
        else {
          let temp = [...state.cartItems.filter((obj) => obj.id !== exists.id)];
          return {
            ...state,
            cartItems: [...temp, product],
          };
        }
      }

      return {
        ...state,
        cartItems: [...state.cartItems, product],
      };

    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: [
          ...state.cartItems.filter((obj) => obj.id !== action.payload.id),
        ],
      };
    case UPDATE_QUANTITY_CART:
      let temp = state.cartItems.find((obj) => obj.id === action.id);
      action.update === "add" ? (temp.qty += 1) : (temp.qty -= 1);
      return {
        ...state,
        cartItems: [
          ...state.cartItems.map((obj) => (obj.id === temp.id ? temp : obj)),
        ],
      };
    default:
      return state;
  }
};
export default cartReducer;
