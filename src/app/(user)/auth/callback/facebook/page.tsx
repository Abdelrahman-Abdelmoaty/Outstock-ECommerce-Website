"use client";

import { useSearchParams } from "next/navigation";
import LoadingComponent from "@src/components/Loading/LoadingComponent";
import { use, useEffect } from "react";
import { authenticateFacebook, authenticateGoogle } from "@src/utils/actions";
import { useDispatch } from "react-redux";
import { setUser } from "@src/redux/slices/userSlice";

export default function page() {
  const searchParams = useSearchParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await authenticateFacebook(
          encodeURIComponent(searchParams.get("code") as string),
        );
        dispatch(setUser(response.user));
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
