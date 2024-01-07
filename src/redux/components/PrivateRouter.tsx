"use client";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "../store";
import { useEffect } from "react";
import { log } from "console";
import { getUserToken } from "@src/lib/utils";
import { setUser } from "../slices/authSlice";

export default function PrivateRoute({ children }: { children: React.ReactNode }) {
  // const dispatch = useAppDispatch();
  const router = useRouter();
  // getUserToken() && dispatch(setUser());
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);
  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/auth");
    }
  }, []);
  return <>{children}</>;
}
