import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

import { useRef } from "react";
import ShopNavbar from "./MiniComponents/ShopNavbar";
import PagesNavbar from "./MiniComponents/PagesNavbar";
import CloseIcon from "@mui/icons-material/Close";
import MobileLeftNav from "./MobileLeftNav";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function MiddleNav() {
  const pathName = usePathname();
  const nav = useRef<HTMLDivElement>(null);
  const mobileLeftNav = useRef<HTMLDivElement>(null);
  const handleLeftMenu = () => {
    mobileLeftNav.current?.classList.remove("translate-x-[-100%]");
  };
  const handleClose = () => {
    mobileLeftNav.current?.classList.add("translate-x-[-100%]");
  };
  return (
    <div className="xl:order-2">
      <button className="text-black xl:hidden" onClick={handleLeftMenu}>
        <MenuOutlinedIcon />
      </button>
      <div
        ref={nav}
        className="ease-500 left-0 top-0 hidden h-auto w-full translate-x-0 bg-inherit p-0 text-base text-[var(--font-color)] xl:flex"
      >
        <button type="button" onClick={handleClose} className="xl:hidden">
          <CloseIcon className="mb-12 text-4xl text-black" />
        </button>
        <ul className="flex flex-col items-start gap-y-5 text-3xl xl:flex-row xl:items-center xl:gap-y-0 xl:text-base ">
          <li>
            <a
              href="/"
              className={`${pathName === "/" && "text-[var(--secondary-color)]"}`}
            >
              Home
            </a>
          </li>
          <li>
            <Link
              href="/shop"
              className={`${pathName === "/shop" && "text-[var(--secondary-color)]"}`}
            >
              Shop
            </Link>
            {/* <ShopNavbar /> */}
          </li>
          <li>
            <PagesNavbar />
          </li>
          <li>
            <a href="/Brands">Brands</a>
          </li>
        </ul>
      </div>
      <MobileLeftNav reference={mobileLeftNav} />
    </div>
  );
}
