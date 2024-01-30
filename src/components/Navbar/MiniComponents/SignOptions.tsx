"use client";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import CloseIcon from "@mui/icons-material/Close";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import { useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "@src/redux/store";
import { leave } from "@src/utils/actions";
import { useRouter } from "next/navigation";
import { logout } from "@src/redux/slices/authSlice";
import { setUser, useUser } from "@src/redux/slices/userSlice";
import { useDispatch } from "react-redux";
export default function SignOptions() {
  // const isLoggedIn = useAppSelector((state) => state.auth.isAuthenticated);
  const sidebar = useRef<HTMLDivElement>(null);
  const options = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const handleOpen = () => {
    sidebar.current?.classList.remove("translate-x-[100%]");
  };
  const handleClose = () => {
    sidebar.current?.classList.add("translate-x-[100%]");
  };
  // const dispatch = useAppDispatch();
  const dispatch = useDispatch();
  const handleLogout = async () => {
    //   dispatch(logout());
    leave();
    dispatch(setUser(null));
    //   handleClose();
    //   router.push("/");
  };
  const user = useUser();

  return (
    <div>
      <button type="button" onClick={handleOpen} className="hv-eff flex-center">
        <div>
          <svg
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
      </button>
      <div
        ref={sidebar}
        className="fixed right-0 top-0 h-screen w-screen translate-x-[100%] bg-white p-12 text-[var(--nav-font-color)] shadow duration-1000 ease-in-out xl:w-auto"
      >
        <button type="button" onClick={handleClose}>
          <CloseIcon className="mb-12 text-4xl text-black" />
        </button>
        {user.user ? (
          <div>
            <button
              className="ease-500 mb-4 border px-4 py-2 font-semibold text-black hover:bg-black hover:text-white"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="mb-4 flex items-center gap-x-2 text-black">
            <PermIdentityOutlinedIcon className="mb-1 text-3xl font-light" />
            <a href="/auth" className="font-semibold" onClick={handleClose}>
              Sign In
            </a>
            <span className="font-medium"> or </span>
            <a
              href="/auth/signup"
              className="font-semibold"
              onClick={handleClose}
            >
              Create an Account
            </a>
          </div>
        )}
        <div className="mt-12">
          <div className="mb-12 flex flex-col gap-y-4 text-black">
            <span className="text-xl font-semibold">Contact</span>
            <span>No. Rosecrans Ave, Suite 200 El Segundo, CA 90245. USA</span>
            <span>Call: +1 (202) 861-5567</span>
            <span>Email: Support@demo.com</span>
          </div>
          <div>
            <span className="text-xl font-semibold text-black">
              Connect on Social :
            </span>
            <ul className="flex items-center text-[var(--secondary-color)]">
              <li className="p-2">
                <a href="#">
                  <FacebookOutlinedIcon className="h-8 w-8" />
                </a>
              </li>
              <li className="p-2">
                <a href="#">
                  <TwitterIcon className="h-8 w-8" />
                </a>
              </li>
              <li className="p-2">
                <a href="#">
                  <InstagramIcon className="h-8 w-8" />
                </a>
              </li>
              <li className="p-2">
                <a href="#">
                  <SportsBasketballIcon className="h-8 w-8" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
