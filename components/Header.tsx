import Link from "next/link";
import Container from "./Container";

import { Heart, Search, ShoppingCart, User } from "react-feather";
import Nav from "./Nav";

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
          <div className="relative h-14 flex-[3]">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="h-full w-full text-xs bg-[#f5f5f5] px-2 rounded"
            />
            <Search className="w-4 absolute top-1/2 right-[5%] transform -translate-y-1/2" />
          </div>
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
