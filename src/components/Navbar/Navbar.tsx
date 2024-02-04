"use client";
import React, { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import "@src/components/Navbar/Navbar.css";
import Logo from "./components/Logo";
import ShopNavItem from "./components/ShopNavItem";
import PagesNavItem from "./components/PagesNavItem";
import MobileLeftNav from "./MobileLeftNav";
import Wrapper from "../Wrapper/Wrapper";
import Searchbox from "./components/Searchbox";
import SignOptions from "./components/SignOptions";
import Cartbox from "./components/Cartbox";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const navbar = useRef<HTMLDivElement>(null);
  const pathName = usePathname();
  const nav = useRef<HTMLDivElement>(null);
  const mobileLeftNav = useRef<HTMLDivElement>(null);

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

  const handleLeftMenu = () => {
    mobileLeftNav.current?.classList.remove("translate-x-[-100%]");
  };

  const handleClose = () => {
    mobileLeftNav.current?.classList.add("translate-x-[-100%]");
  };

  return (
    <div
      ref={navbar}
      className="sticky top-0 z-[999999] w-screen bg-white p-4 transition duration-1000"
    >
      <Wrapper>
        <nav className="flex items-center justify-between font-medium">
          <div className="order-2 shrink-0 xl:order-1">
            <Logo />
          </div>
          <div className="xl:order-2">
            <button className="text-black xl:hidden" onClick={handleLeftMenu}>
              <Menu />
            </button>
            <div
              ref={nav}
              className="ease-500 left-0 top-0 hidden h-auto w-full translate-x-0 bg-inherit p-0 text-base text-[var(--font-color)] xl:flex"
            >
              <button type="button" onClick={handleClose} className="xl:hidden">
                <X className="mb-12 text-4xl text-black" />
              </button>
              <ul className="flex flex-col items-start gap-y-5 text-3xl xl:flex-row xl:items-center xl:gap-y-0 xl:text-base ">
                <li className="py-4">
                  <a
                    href="/"
                    className={`${pathName === "/" && "text-[var(--secondary-color)]"}`}
                  >
                    Home
                  </a>
                </li>
                <li>
                  <ShopNavItem />
                </li>
                <li>
                  <PagesNavItem />
                </li>
                <li className="py-4">
                  <a href="/Brands">Brands</a>
                </li>
              </ul>
            </div>
            <MobileLeftNav reference={mobileLeftNav} />
          </div>
          <ul className="flex-center order-3 font-light text-[#666] xl:order-3">
            <li>
              <Searchbox />
            </li>
            <li>
              <Cartbox />
            </li>
            <li className="pr-0">
              <SignOptions />
            </li>
          </ul>
        </nav>
      </Wrapper>
    </div>
  );
}
