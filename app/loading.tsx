"use client";

import useTypeWriter from "react-typewriter-hook";

export default function Loading() {
  const text = useTypeWriter("EasyMart");

  return (
    <div className="h-screen bg-white flex items-center justify-center">
      <div className="text-3xl font-bold text-center text-black">
        <span className="text-primary">{text}</span>
      </div>
    </div>
  );
}
