"use client";

import { useState, useTransition } from "react";
import AddIcon from "@mui/icons-material/Add";
import { useAppDispatch, useAppSelector } from "@src/redux/store";
import LoadingSpinner from "../Loading/LoadingSpinner";
import { addProductToCartLocalStorageUtil } from "@src/lib/utils";
import { addProductToLocalStorage, addToCart } from "@src/redux/slices/authSlice";

export default function AddToCartButton({ id }: { id: number }) {
  const [isPending, startTransition] = useTransition();
  const [count, setCount] = useState<number>(0);
  const dispatch = useAppDispatch();
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);
  const addItem = () => {
    startTransition(async () => {
      if (isAuthenticated) {
        dispatch(addToCart({ id, count: count + 1 }));
      }
      dispatch(addProductToLocalStorage({ id, count: count + 1 }));
      setCount((prev) => prev + 1);
    });
  };
  return (
    <button onClick={addItem} className="flex items-center">
      {!isPending ? (
        <>
          <AddIcon />
          <p className="inline-block">Add To Cart</p>
        </>
      ) : (
        <LoadingSpinner sz="6" />
      )}
    </button>
  );
}
