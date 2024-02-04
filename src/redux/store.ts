import { configureStore, Action, ThunkAction } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import rootReducer from "./reducers";

export const createStore = () =>
  configureStore({
    reducer: rootReducer,
  });

export default createStore;

export type StoreType = ReturnType<typeof createStore>;
export type RootState = ReturnType<StoreType["getState"]>;
export type AppDispatch = StoreType["dispatch"];


