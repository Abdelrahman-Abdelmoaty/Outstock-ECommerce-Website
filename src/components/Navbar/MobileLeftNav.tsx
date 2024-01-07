"use client";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
export default function MobileLeftNav({ reference }: { reference: React.RefObject<HTMLDivElement> }) {
  const handleClose = () => {
    reference.current?.classList.add("translate-x-[-100%]");
  };
  const [openPagesList, setOpenPagesList] = useState<boolean>(false);
  const openPages = () => {
    setOpenPagesList((prev) => !prev);
  };
  return (
    <div className="w-[70vw] max-w-[500px] h-screen fixed left-0 top-0 translate-x-[-100%] ease-500 bg-white p-5" ref={reference}>
      <div className="flex items-center justify-between p-4">
        <p className="font-semibold text-xl">Menu</p>
        <CloseIcon onClick={handleClose} className="cursor-pointer" />
      </div>
      <div className="flex items-center justify-between p-4">
        <a href="/shop">Shop</a>
      </div>
      <div onClick={openPages} className="flex items-center justify-between p-4">
        <p>Pages</p>
        <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium w-8 h-8 css-i4bv87-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="KeyboardArrowDownOutlinedIcon">
          <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path>
        </svg>
      </div>
      {openPagesList && (
        <div className="ml-6">
          <ul>
            <li className="p-2">
              <a href="/Blog">Blog</a>
            </li>
            <li className="p-2">
              <a href="/ContactUs">Contact Us</a>
            </li>
            <li className="p-2">
              <a href="/AboutUs">About Us</a>
            </li>
            <li className="p-2">
              <a href="/StoreLocator">Store Locator</a>
            </li>
            <li className="p-2">
              <a href="/Page404">Page 404</a>
            </li>
            <li className="p-2">
              <a href="/FAQsPage">FAQs Page</a>
            </li>
          </ul>
        </div>
      )}
      <div className="p-4">
        <a href="/Brands">Brands</a>
      </div>
    </div>
  );
}
