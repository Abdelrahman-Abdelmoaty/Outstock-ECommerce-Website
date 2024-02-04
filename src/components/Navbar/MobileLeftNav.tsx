"use client";
import { X, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function MobileLeftNav({
  reference,
}: {
  reference: React.RefObject<HTMLDivElement>;
}) {
  const handleClose = () => {
    reference.current?.classList.add("translate-x-[-100%]");
  };

  const [openPagesList, setOpenPagesList] = useState<boolean>(false);

  const openPages = () => {
    setOpenPagesList((prev) => !prev);
  };

  return (
    <div
      className="ease-500 fixed left-0 top-0 h-screen w-[70vw] max-w-[500px] translate-x-[-100%] bg-white p-5"
      ref={reference}
    >
      <div className="flex items-center justify-between p-4">
        <p className="text-xl font-semibold">Menu</p>
        <X onClick={handleClose} className="cursor-pointer" />
      </div>
      <div className="flex items-center justify-between p-4">
        <a href="/shop">Shop</a>
      </div>
      <div
        onClick={openPages}
        className="flex cursor-pointer items-center justify-between p-4"
      >
        <p>Pages</p>
        <ChevronDown />
      </div>
      {openPagesList && (
        <div className="-mt-4 ml-6">
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
