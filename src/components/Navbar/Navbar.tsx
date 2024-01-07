"use client";
import "@src/components/Navbar/Navbar.css";
import { useEffect, useRef } from "react";
import MiddleNav from "./MiddleNav";
import RightNav from "./RightNav";
import Logo from "./MiniComponents/Logo";

import { useAppSelector } from "@src/redux/store";
import Wrapper from "../Wrapper/Wrapper";

export default function Navbar() {
  const navbar = useRef<HTMLDivElement>(null);
  const isAdmin = useAppSelector((state) => state.auth.user?.isAdmin);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 90) {
        navbar.current?.classList.add("navbar-animation");
      } else {
        navbar.current?.classList.remove("navbar-animation");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div ref={navbar} className="w-full relative top-0 left-0 bg-white z-[999999]">
      {isAdmin && (
        <div className="text-center pt-5">
          <a href="/admin" className="font-semibold text-3xl hover:text-[var(--secondary-color)] ease-500">
            Go to Admin Page
          </a>
        </div>
      )}
      <Wrapper>
        <nav className="font-medium flex items-center justify-between py-8">
          <Logo />
          <MiddleNav />
          <RightNav />
        </nav>
      </Wrapper>
    </div>
  );
}
