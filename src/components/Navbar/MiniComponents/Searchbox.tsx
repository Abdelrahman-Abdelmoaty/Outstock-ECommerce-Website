import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
      <button type="button" className="flex-center hv-eff" onClick={handleShow}>
        <div>
          <svg fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-5 h-5 mr-1 mb-[2px]">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
        </div>
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
