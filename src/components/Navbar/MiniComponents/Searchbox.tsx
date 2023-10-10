import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

export default function Searchbox() {
  const [show, setShow] = useState<boolean>(false);
  const handleShow = (e: React.MouseEvent<HTMLButtonElement>) => {
    setShow((prev) => !prev);
    e.currentTarget.classList.toggle("active");
  };
  return (
    <>
      <button type="button" className="flex-center" onClick={handleShow}>
        <SearchIcon />
        <span className="hidden xl:block">Search</span>
      </button>
      <div
        className={`absolute flex-center top-full bg-white p-3 rounded shadow text-sm text-black right-96 duration-500 ease-in-out
      ${show ? "translate-y-0 visible opacity-100" : "translate-y-[-3rem] invisible opacity-0"}`}
      >
        <input type="text" placeholder="Search entire store here..." className="w-80 outline-none" />
        <SearchIcon />
      </div>
    </>
  );
}
