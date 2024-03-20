import Link from "next/link";
import Container from "./Container";

import { Heart, ShoppingCart, User } from "react-feather";
import Nav from "./Nav";
import SearchComponent from "./Search";

export default function Header() {
  return (
    <header className="border-b border-[#ddd]">
      <div className="bg-black text-white text-center py-4">
        <p className="text-[0.9rem] text-[#eee]">
          Summer sales for all products and free express delivery{" "}
          <Link href="/products" className="font-bold underline">
            Shop now!
          </Link>
        </p>
      </div>
      <Container className="flex items-center justify-between gap-4 py-4">
        <Link href="/" className="flex-1 font-bold text-3xl">
          EasyMart
        </Link>

        <Nav />
        <div className="flex-[1.5] flex items-center justify-between gap-4">
          <SearchComponent />
          <div className="flex-1 flex items-center gap-3">
            <Link href="/wishlist">
              <Heart className="w-5 cursor-pointer" />
            </Link>
            <Link href="/cart">
              <ShoppingCart className="w-5 cursor-pointer" />
            </Link>
            <Link href="/account">
              <User className="w-5 cursor-pointer" />
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
}
