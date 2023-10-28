"use client";
import { useEffect } from "react";
import { redirect, useSearchParams } from "next/navigation";
import { saveAccessToken } from "@src/lib/utils";
import LoadingComponent from "@src/components/LoadingComponent";
import { setUser } from "@src/redux/slices/userSlice";
import { useAppDispatch } from "@src/redux/store";
import { login, loginApi } from "@src/redux/slices/authSlice";

const AuthCallback = () => {
  const searchParams = useSearchParams();
  const dispatch = useAppDispatch();
  useEffect(() => {
    const token = searchParams.get("code");
    if (token) {
      dispatch(loginApi({ token }));
      redirect("/");
    } else {
      redirect("/error");
    }
  }, []);

  return (
    <div className="h-[60vh] flex-center">
      <LoadingComponent />
    </div>
  );
};

export default AuthCallback;
