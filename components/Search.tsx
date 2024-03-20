"use client";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState, KeyboardEvent } from "react";
import { Search } from "react-feather";

export default function SearchComponent() {
  const [term, setTerm] = useState("");

  const router = useRouter();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTerm(event.target.value);
  };

  const handleSearch = () => {
    router.push(`/search?s=${term}`);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && term) {
      handleSearch();
    }
  };

  return (
    <div className=" h-14 flex-[3] flex items-center">
      <input
        type="text"
        placeholder="What are you looking for?"
        className="h-full w-full text-xs bg-[#f5f5f5] px-2 rounded-t rounded-bl flex-[6]"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <div
        className="flex-1 h-14 flex rounded-tr rounded-br items-center justify-center bg-[#f5f5f5] hover:bg-[#e2e2e2] cursor-pointer"
        onClick={handleSearch}
      >
        <Search className="w-4 cursor-pointer" />
      </div>
    </div>
  );
}
