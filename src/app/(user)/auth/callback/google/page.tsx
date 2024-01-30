"use client";

import { useSearchParams } from "next/navigation";
import LoadingComponent from "@src/components/Loading/LoadingComponent";
import { useAppDispatch } from "@src/redux/store";
import { googleLogin, setAuthentication } from "@src/redux/slices/authSlice";
import { use, useEffect } from "react";
import { authenticateGoogle } from "@src/utils/actions";

export default function page() {
  const searchParams = useSearchParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await authenticateGoogle(
          encodeURIComponent(searchParams.get("code") as string),
        );
        dispatch(setAuthentication(response));
        open("/", "_self");
      } catch (error) {
        throw error;
      }
    };
    fetch();
  }, []);

  return (
    <div className="flex-center h-[60vh]">
      <LoadingComponent />
    </div>
  );
}
