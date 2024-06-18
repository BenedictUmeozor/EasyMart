"use client";

import { usePathname } from "next/navigation";
import { ReactNode, useEffect, useRef } from "react";

const Wrapper = ({ children }: { children: ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div>
      <div ref={ref} />
      <div>{children}</div>
    </div>
  );
};
export default Wrapper;
