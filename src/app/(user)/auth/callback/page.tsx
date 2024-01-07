"use client";
import { useRouter, useSearchParams } from "next/navigation";
import LoadingComponent from "@src/components/Loading/LoadingComponent";
import { useAppDispatch } from "@src/redux/store";
import { facebookLogin, googleLogin } from "@src/redux/slices/authSlice";
import { useEffect } from "react";

export default function AuthCallback() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const authCode = searchParams.get("code") as string;
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(googleLogin(authCode));
  }, []);
  return (
    <div className="h-[60vh] flex-center">
      <LoadingComponent />
    </div>
  );
}
