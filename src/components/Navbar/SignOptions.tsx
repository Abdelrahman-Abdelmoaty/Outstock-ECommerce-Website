import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import { useRef } from "react";
export default function SignOptions() {
  const sidebar = useRef<HTMLDivElement>(null);
  const handleOpen = () => {
    sidebar.current?.classList.toggle("translate-x-[100%]");
  };
  const handleClose = () => {
    sidebar.current?.classList.toggle("translate-x-[100%]");
  };
  return (
    <>
      <button type="button" onClick={handleOpen}>
        <MenuOutlinedIcon />
      </button>
      <div ref={sidebar} className="fixed right-0 translate-x-[100%] top-0 bg-white text-[var(--nav-font-color)] h-screen p-12 duration-1000 ease-in-out shadow">
        <button type="button" onClick={handleClose}>
          <CloseIcon className="text-black text-4xl mb-12" />
        </button>
        <div className="text-black flex items-center gap-x-2 mb-4">
          <PermIdentityOutlinedIcon className="text-3xl font-light mb-1" />
          <Link href="" className="font-semibold">
            Sign In
          </Link>
          <span className="font-medium"> or </span>
          <Link href="" className="font-semibold">
            Create an Account
          </Link>
        </div>
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
    </>
  );
}
