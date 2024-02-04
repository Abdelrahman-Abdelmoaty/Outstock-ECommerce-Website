import { combineReducers } from "redux";
import cartReducer from "./slices/cartSlice";
import userReducer from "./slices/userSlice";

const rootReducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
});

export default rootReducer;
