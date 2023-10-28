"use client";
import { useEffect } from "react";
import { redirect, useRouter } from "next/navigation";
import { useAppSelector } from "../store";

export default function PrivateRoute({ children }: { children: React.ReactNode }) {
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);
  const router = useRouter();
  if (!isAuthenticated) {
    // router.push("/auth");
    // redirect("/auth");
  }
  return <>{children}</>;
}
