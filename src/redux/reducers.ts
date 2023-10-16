// reducers.ts

import { combineReducers } from "redux";
import userReducer from "./userSlice";
import productReducer from "./productSlice";
import loginReducer from "./loginSlice";

const rootReducer = combineReducers({
  user: userReducer,
  product: productReducer,
  login: loginReducer,
  // Add more reducers as needed
});

export default rootReducer;
