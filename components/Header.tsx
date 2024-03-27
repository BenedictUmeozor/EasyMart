import Link from "next/link";
import Container from "./Container";

import { Heart, Search, User } from "react-feather";
import Nav from "./Nav";
import SearchComponent from "./Search";
import { getAuth } from "@/app/api/auth/[...nextauth]/route";
import CartLink from "./CartLink";
import MobileNav from "./MobileNav";
import MobileSearch from "./MobileSearch";

export default async function Header() {
  const session = await getAuth();

  return (
    <header className="border-b border-[#ddd] max-md:sticky -top-1 left-0 bg-white z-30">
      <div className="bg-black text-white text-center py-4 max-md:hidden">
        <p className="text-xs md:text-[0.9rem] text-[#eee]">
          Summer sales for all products and free express delivery{" "}
          <Link href="/products" className="font-bold underline">
            Shop now!
          </Link>
        </p>
      </div>
      <Container className="hidden md:flex items-center justify-between gap-4 py-4 max-md:h-full">
        <Link href="/" className="flex-1 font-bold text-3xl">
          EasyMart
        </Link>

        <Nav sessionIsActive={session !== null} />
        <div className="flex-[1.5] flex items-center justify-between gap-4">
          <SearchComponent />
          <div className="flex-1 flex items-center lg:gap-3 md:gap-2">
            {session && (
              <Link href="/wishlist" title="wishlist">
                <Heart className="w-5 cursor-pointer" />
              </Link>
            )}
            <CartLink />
            {session && (
              <Link href="/account" title="account">
                <User className="w-5 cursor-pointer" />
              </Link>
            )}
          </div>
        </div>
      </Container>

      <Container className="md:hidden flex items-center justify-between py-4 ">
        <div className="flex items-center gap-4">
          <MobileNav />
          <Link href="/" className="flex-1 font-bold text-2xl">
            EasyMart
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <MobileSearch />
          {session && (
            <Link href="/wishlist" title="wishlist">
              <Heart className="w-5 cursor-pointer" />
            </Link>
          )}
          <CartLink />
          {session && (
            <Link href="/account" title="account">
              <User className="w-5 cursor-pointer" />
            </Link>
          )}
        </div>
      </Container>
    </header>
  );
}
