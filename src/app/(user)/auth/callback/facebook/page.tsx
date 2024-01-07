"use client";
import LoadingComponent from "@src/components/Loading/LoadingComponent";
import { facebookLogin } from "@src/redux/slices/authSlice";
import { useAppDispatch } from "@src/redux/store";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function page() {
  const searchParams = useSearchParams();

  const authCode = searchParams.get("code") as string;
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(facebookLogin(authCode));
  });

  return (
    <div className="h-[70vh] flex-center">
      <LoadingComponent />
    </div>
  );
}
