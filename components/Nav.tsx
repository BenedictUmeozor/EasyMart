"use client";

import { signOut } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { v4 as uuidV4 } from "uuid";

const links = [
  {
    id: uuidV4(),
    name: "Home",
    path: "/",
  },
  {
    id: uuidV4(),
    name: "Contact",
    path: "/contact",
  },
  {
    id: uuidV4(),
    name: "About",
    path: "/about",
  },
];

export default function Nav({ sessionIsActive }: { sessionIsActive: boolean }) {
  const pathname = usePathname();

  return (
    <nav className="flex-[2]">
      <ul className="block">
        {links.map((link) => (
          <li key={link.id} className="inline-block mx-4 nav-link">
            <Link href={link.path} className="block">
              {link.name}
            </Link>
            {pathname === link.path && (
              <div className="h-[1.5px] w-full bg-[#ccc] rounded mt-1"></div>
            )}
          </li>
        ))}
        {!sessionIsActive && (
          <li className="inline-block mx-4 nav-link">
            <Link href={"/signup"} className="block">
              Sign Up
            </Link>
            {pathname === "/signup" && (
              <div className="h-[1.5px] w-full bg-[#ccc] rounded mt-1"></div>
            )}
          </li>
        )}
        {sessionIsActive && (
          <li className="inline-block mx-4 nav-link">
            <button
              className="block hover:scale-100"
              onClick={async () => await signOut()}
            >
              Log out
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
}
