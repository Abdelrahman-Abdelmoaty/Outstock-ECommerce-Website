import SearchIcon from "@mui/icons-material/Search";
import { useRef } from "react";

export default function Searchbox() {
  const searchInput = useRef<HTMLDivElement>(null);
  const handleSearchBtn = (e: React.MouseEvent) => {
    e.currentTarget.classList.toggle("text-[var(--secondary-color)]");
    searchInput.current?.classList.toggle("search-box");
  };
  return (
    <>
      <div className="flex-center" onClick={handleSearchBtn}>
        <SearchIcon />
        Search
      </div>
      <div ref={searchInput} className="absolute translate-y-[-3rem] flex-center top-full bg-white p-3 rounded shadow text-sm text-black right-96 duration-500 ease-in-out opacity-0 invisible">
        <input type="text" placeholder="Search entire store here..." className="w-80 outline-none" />
        <SearchIcon />
      </div>
    </>
  );
}
