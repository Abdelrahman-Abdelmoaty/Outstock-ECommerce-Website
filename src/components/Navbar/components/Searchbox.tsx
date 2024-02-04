import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";

export default function Searchbox() {
  const [show, setShow] = useState<boolean>(false);
  const [input, setInput] = useState<string>("");

  const handleShow = () => {
    setShow((prev) => !prev);
  };

  const router = useRouter();

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (input === "") return;
    const params = new URLSearchParams(`query=${input}`);
    router.push(`shop?${params}`);
  };

  useEffect(() => {}, []);

  return (
    <>
      <button
        type="button"
        className={`flex-center hv-eff space-x-1 ${show ? "active" : ""}`}
        onClick={handleShow}
      >
        <Search className="h-5 w-5" />
        <span className="hidden xl:block">Search</span>
      </button>
      <div
        className={`flex-center absolute right-0 top-full rounded bg-white p-3 text-sm text-black shadow duration-500 ease-in-out xl:right-96
      ${show ? "visible translate-y-0 opacity-100" : "invisible translate-y-[-3rem] opacity-0"}`}
        onBlur={() => setShow(false)}
      >
        <form onSubmit={handleSearch} className="flex items-center">
          <input
            name="query"
            type="text"
            placeholder="Search entire store here..."
            className="w-80 outline-none"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit">
            <Search className="h-5 w-5 text-gray-400" />
          </button>
        </form>
      </div>
    </>
  );
}
