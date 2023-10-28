"use client";
import { getAccessToken } from "@src/lib/utils";
import { useAppDispatch } from "../store";
import { setUser } from "../slices/authSlice";
import { useEffect } from "react";

export default function Loader({ children }: { children: React.ReactNode }) {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const token = getAccessToken();
    token && dispatch(setUser(token));
  }, []);
  return <> {children}</>;
}
