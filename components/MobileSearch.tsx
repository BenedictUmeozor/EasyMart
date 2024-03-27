"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Search, X } from "react-feather";

export default function MobileSearch() {
  const [term, setTerm] = useState("");
  const [open, setOpen] = useState(false);

  const router = useRouter();

  const openSearch = () => setOpen(true);
  const closeSearch = () => setOpen(false);

  const handleSearch = () => {
    router.push(`/search?s=${term}`);
    closeSearch();
    setTerm("");
  };

  return (
    <>
      <button className="md:hidden" onClick={openSearch}>
        <Search className="w-5 cursor-pointer" />
      </button>
      {open && (
        <div
          style={{ background: "rgba(255, 255, 255, 1)" }}
          className="md:hidden fixed top-0 left-0 z-30 h-screen w-full p-4 search_bar"
        >
          <div className="flex items-center justify-end">
            <X
              className="w-10 text-crimson cursor-pointer"
              onClick={closeSearch}
            />
          </div>
          <p className="mt-10 mb-4">Enter a search</p>
          <div className="h-14">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="h-full w-full text-xs bg-[#ccc] px-2 rounded-t rounded-bl flex-[6]"
              onChange={(e) => setTerm(e.target.value)}
            />
          </div>
          <button
            className="bg-crimson h-12 mt-6 w-full flex items-center justify-center gap-2 text-white rounded button-hover"
            onClick={handleSearch}
          >
            Search <Search className="w-4" />
          </button>
        </div>
      )}
    </>
  );
}
