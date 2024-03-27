"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Links() {
  const pathname = usePathname();

  return (
    <div className="md:flex items-center justify-center">
      <ul className="pl-4 text-left">
        <li className="block mb-2">
          <Link
            href="/account"
            className={
              "text-[0.9rem] hover:text-crimson " +
              (pathname === "/account" ? "text-crimson" : "text-gray-600")
            }
          >
            My Profile
          </Link>
        </li>
        <li className="block">
          <Link
            href="/account/orders"
            className={
              "text-[0.9rem] hover:text-crimson " +
              (pathname === "/account/orders"
                ? "text-crimson"
                : "text-gray-600")
            }
          >
            My Orders
          </Link>
        </li>
      </ul>
    </div>
  );
}
