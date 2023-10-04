import Link from "next/link";
import { useRef } from "react";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

export default function PagesNavbar() {
  const pagesNavbar = useRef<HTMLUListElement>(null);
  const handleMouseOver = () => {
    pagesNavbar.current?.classList.add("show");
  };
  const handleMouseOut = () => {
    setTimeout(() => {
      pagesNavbar.current?.classList.remove("show");
    }, 100);
  };
  const handleMouseEnter = () => {
    if (pagesNavbar.current?.classList.contains("show")) {
      pagesNavbar.current.classList.add("active");
    }
  };
  const handleMouseLeave = () => {
    setTimeout(() => {
      pagesNavbar.current?.classList.remove("active");
    }, 100);
  };
  return (
    <>
      <Link href="/pages" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        <div className="flex-center">
          Pages
          <KeyboardArrowDownOutlinedIcon />
        </div>
      </Link>
      <ul
        ref={pagesNavbar}
        className="pages-navbar p-4 absolute top-full font-light bg-white shadow text-[var(--nav-font-color)] opacity-0 invisible translate-y-12 duration-500 ease-in-out"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <li>
          <Link href="">Blog</Link>
        </li>
        <li>
          <Link href="">Contact Us</Link>
        </li>
        <li>
          <Link href="">About Us</Link>
        </li>
        <li>
          <Link href="">Store Locator</Link>
        </li>
        <li>
          <Link href="">Page 404</Link>
        </li>
        <li>
          <Link href="">FAQs Page</Link>
        </li>
      </ul>
    </>
  );
}
