"use client";

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
  {
    id: uuidV4(),
    name: "Sign Up",
    path: "/signup",
  },
];

export default function Nav() {
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
      </ul>
    </nav>
  );
}
