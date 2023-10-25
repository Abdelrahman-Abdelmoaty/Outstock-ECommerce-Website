import { combineReducers } from "redux";
import userReducer from "./slices/userSlice";
import productReducer from "./slices/productSlice";
import authReducer from "./slices/authSlice";

const rootReducer = combineReducers({
  user: userReducer,
  product: productReducer,
  auth: authReducer,
});

export default rootReducer;
