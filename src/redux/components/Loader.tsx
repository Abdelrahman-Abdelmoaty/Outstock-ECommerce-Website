"use client";
import { useAppDispatch, useAppSelector } from "../store";
import { getProductsFromLocalStorage, getUserCart, mergeCarts, setUser } from "../slices/authSlice";
import { getProductsFromLocalStorageUtil, getUserToken } from "@src/lib/utils";
import { getProducts } from "../slices/productsSlice";
import { useEffect } from "react";
export default function Loader({ children }: { children: React.ReactNode }) {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getProductsFromLocalStorage());
    getUserToken() && dispatch(setUser());
    getUserToken() && dispatch(mergeCarts());
  }, []);
  return <>{children}</>;
}
