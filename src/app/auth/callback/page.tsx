"use client";
import { useEffect } from "react";
import { redirect, useSearchParams } from "next/navigation";
import { saveAccessToken } from "@src/lib/utils";
import LoadingComponent from "@src/components/LoadingComponent";

const AuthCallback = () => {
  const searchParams = useSearchParams();
  useEffect(() => {
    const token = searchParams.get("code");
    if (token) {
      saveAccessToken(token);
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
