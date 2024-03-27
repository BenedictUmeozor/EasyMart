"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { Menu, X } from "react-feather";
import Nav from "./Nav";
import { usePathname } from "next/navigation";

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const { data: session } = useSession();
  const pathname = usePathname()

  const openNav = () => setOpen(true);

  const closeNav = () => setOpen(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  useEffect(() => {
    if (open) {
      closeNav()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  return (
    <>
      <Menu className="w-5 cursor-pointer" onClick={openNav} />
      {open && (
        <div className="md:hidden fixed h-screen top-0 left-0 w-full bg-white p-2 py-8 z-10 hamburger">
          <div>
            <X className="w-12 cursor-pointer" onClick={closeNav} />
            <div className="mt-12">
              <ul>
                <Nav sessionIsActive={session?.user !== null} />
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
