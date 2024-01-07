"use client";
import SearchIcon from "@mui/icons-material/Search";

export default function Search() {
  return (
    <div className="flex">
      <input type="text" placeholder="Search" className="" />
      <SearchIcon />
    </div>
  );
}
