"use client";
import "@src/components/Navbar/Navbar.css";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import logo from "@public/assets/images/logo-header.png";
import Link from "next/link";
import Searchbox from "./Searchbox";
import Cartbox from "./Cartbox";
import ShopNavbar from "./ShopNavbar";
import PagesNavbar from "./PagesNavbar";
import { useEffect, useRef } from "react";
export default function Navbar() {
  const navbar = useRef<HTMLElement>(null);
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
    <nav ref={navbar} className="relative top-0 flex justify-between items-center shadow font-medium py-8 w-full bg-[var(--primary-color)] px-[17.5%] z-[9999]">
      <div>
        <Link href="/">
          <img src={logo.src} alt="outstock-logo" />
        </Link>
      </div>
      <ul className="flex-center text-[var(--nav-font-color)]">
        <li className="active">
          <Link href="/">Home</Link>
        </li>
        <li>
          <ShopNavbar />
        </li>
        <li>
          <PagesNavbar />
        </li>
        <li>
          <Link href="/brands">Brands</Link>
        </li>
      </ul>
      <ul className="flex-center text-[#666] font-light">
        <li>
          <Searchbox />
        </li>
        <li>
          <Cartbox />
        </li>
        <li>
          <div>
            <MenuOutlinedIcon />
          </div>
        </li>
      </ul>
    </nav>
  );
}
