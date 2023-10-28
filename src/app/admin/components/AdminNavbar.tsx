"use client";

import { logout } from "@src/redux/slices/authSlice";
import { useAppDispatch } from "@src/redux/store";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AdminNavbar() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const handleLogout = async () => {
    await dispatch(logout());
    router.push("/");
  };
  return (
    <div className="flex items-center justify-between">
      <p className="text-4xl font-bold">Admin</p>
      <Link href="/" className="text-2xl font-semibold hover:text-[var(--secondary-color)] ease-500">
        Go To Website
      </Link>
      <button className="border-2 font-medium border-black animate-btn px-5 py-2 hover:border-[var(--secondary-color)]" onClick={handleLogout}>
        <span>Log Out</span>
      </button>
    </div>
  );
}
