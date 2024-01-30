"use client";
import { useAppDispatch, useAppSelector } from "../store";
import {
  getProductsFromLocalStorage,
  mergeCarts,
  setUser,
} from "../slices/authSlice";
import { getUserToken } from "@src/utils/lib";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
export default function Loader({ children }: { children: React.ReactNode }) {
  const pathName = usePathname();
  const dispatch = useAppDispatch();
  const router = useRouter();
  const user = useAppSelector((state) => state.auth.user);
  const isAdmin = user?.isAdmin;
  useEffect(() => {
    const fetchData = async () => {
      dispatch(getProductsFromLocalStorage());
      getUserToken() && (await dispatch(setUser()));
      getUserToken() && dispatch(mergeCarts());
    };
    fetchData();
  }, []);
  useEffect(() => {
    if (user) {
      const isAdmin = user.isAdmin;
      if (pathName.includes("admin") && !isAdmin) {
        router.replace("/auth");
      }
    }
  }, [user]);
  return <>{children}</>;
}
