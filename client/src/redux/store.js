import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import productsReducer from "./ducks/productsReducer";
import productReducer from "./ducks/productReducer";
import cartReducer from "./ducks/cartReducer";

const reducer = combineReducers({
  products: productsReducer,
  product: productReducer,
  cart: cartReducer,
});

const middleware = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
