"use client";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import CloseIcon from "@mui/icons-material/Close";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import Link from "next/link";
import { useRef } from "react";
import { useAppDispatch, useAppSelector } from "@src/redux/store";
import { logout } from "@src/redux/slices/authSlice";
export default function SignOptions() {
  const isLoggedIn = useAppSelector((state) => state.auth.isAuthenticated);
  const sidebar = useRef<HTMLDivElement>(null);
  const handleOpen = () => {
    sidebar.current?.classList.remove("translate-x-[100%]");
  };
  const handleClose = () => {
    sidebar.current?.classList.add("translate-x-[100%]");
  };
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <div onBlur={handleClose}>
      <button type="button" onClick={handleOpen} className="hv-eff flex-center">
        <div>
          <svg fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </div>
      </button>
      <div ref={sidebar} className="fixed right-0 translate-x-[100%] top-0 bg-white text-[var(--nav-font-color)] h-screen p-12 duration-1000 ease-in-out shadow w-screen xl:w-auto">
        <button type="button" onClick={handleClose}>
          <CloseIcon className="text-black text-4xl mb-12" />
        </button>
        {isLoggedIn ? (
          <div>
            <button className="font-semibold text-black mb-4 border px-4 py-2 hover:bg-black hover:text-white ease-500" onClick={handleLogout}>
              Logout
            </button>
          </div>
        ) : (
          <div className="text-black flex items-center gap-x-2 mb-4">
            <PermIdentityOutlinedIcon className="text-3xl font-light mb-1" />
            <Link href="/auth" className="font-semibold" onClick={handleClose}>
              Sign In
            </Link>
            <span className="font-medium"> or </span>
            <Link href="auth/signup" className="font-semibold" onClick={handleClose}>
              Create an Account
            </Link>
          </div>
        )}
        <div className="flex text-black gap-x-5 mb-12">
          <div>
            <button className="flex-center">
              <span>English 06</span>
              <KeyboardArrowDownOutlinedIcon />
            </button>
          </div>
          <div>
            <button className="flex-center">
              <span>USD - US Dollar</span>
              <KeyboardArrowDownOutlinedIcon />
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-y-4 text-black mb-12">
          <span className="font-semibold text-xl">Contact</span>
          <span>No. Rosecrans Ave, Suite 200 El Segundo, CA 90245. USA</span>
          <span>Call: +1 (202) 861-5567</span>
          <span>Email: Support@demo.com</span>
        </div>
        <div>
          <span className="text-black font-semibold text-xl">Connect on Social :</span>
          <ul className="flex items-center text-[var(--secondary-color)]">
            <li className="p-2">
              <a href="">
                <FacebookOutlinedIcon className="w-8 h-8" />
              </a>
            </li>
            <li className="p-2">
              <a href="">
                <TwitterIcon className="w-8 h-8" />
              </a>
            </li>
            <li className="p-2">
              <a href="">
                <InstagramIcon className="w-8 h-8" />
              </a>
            </li>
            <li className="p-2">
              <a href="">
                <SportsBasketballIcon className="w-8 h-8" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
