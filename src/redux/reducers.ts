import { combineReducers } from "redux";
import authReducer from "./slices/authSlice";
import cartReducer from "./slices/cartSlice";
import userReducer from "./slices/userSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
  user: userReducer,
});

export default rootReducer;
