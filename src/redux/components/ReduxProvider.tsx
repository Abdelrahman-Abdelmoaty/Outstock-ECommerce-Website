"use client";

import { useEffect } from "react";
import store, { useAppDispatch } from "../store";
import { Provider } from "react-redux";
import { setUser } from "../slices/authSlice";
import { getUserToken } from "@src/lib/utils";

export default function ReduxProvider({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
