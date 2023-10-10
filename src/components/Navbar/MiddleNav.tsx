import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import Link from "next/link";
import { useRef } from "react";
import ShopNavbar from "./MiniComponents/ShopNavbar";
import PagesNavbar from "./MiniComponents/PagesNavbar";
import CloseIcon from "@mui/icons-material/Close";

export default function MiddleNav() {
  const nav = useRef<HTMLDivElement>(null);
  const handleLeftMenu = () => {
    nav.current?.classList.remove("translate-x-[-100%]");
  };
  const handleClose = () => {
    nav.current?.classList.add("translate-x-[-100%]");
  };
  return (
    <div className="xl:order-2">
      <button className="xl:hidden text-black" onClick={handleLeftMenu}>
        <MenuOutlinedIcon />
      </button>
      <div ref={nav} className="text-[var(--font-color)] ease-500 h-screen w-full p-10 text-2xl fixed bg-white left-0 top-0 translate-x-[-100%] xl:p-0 xl:text-base xl:h-auto xl:bg-inherit xl:translate-x-0 xl:static ">
        <button type="button" onClick={handleClose} className="xl:hidden">
          <CloseIcon className="text-black text-4xl mb-12" />
        </button>
        <ul className="flex text-3xl xl:text-base items-start xl:items-center flex-col xl:flex-row gap-y-5 xl:gap-y-0">
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
      </div>
    </div>
  );
}
