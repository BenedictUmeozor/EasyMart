import Link from "next/link";
import Container from "./Container";
import { Facebook, Instagram, Linkedin, Send, Twitter } from "react-feather";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-6 pb-4">
      <Container className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4 lg:gap-8 max-md:px-4">
        <div>
          <Link href={"/"} className="font-semibold text-lg mb-4 block">
            EasyMart
          </Link>
          <a href="#" className="mb-4 block">
            Subscribe
          </a>
          <div>
            <p className="text-xs text-[#ddd] mb-2">
              Get 10% off your first order
            </p>
            <div className="relative h-8">
              <input
                type="text"
                className="w-full h-full bg-transparent border border-[#ddd] rounded px-2 text-xs text-[#aaa]"
                placeholder="Enter your email"
              />
              <Send className="w-4 absolute top-1/2 transform -translate-y-1/2 right-2 cursor-pointer text-[#ddd]" />
            </div>
          </div>
        </div>
        <div>
          <h2 className="font-semibold text-lg mb-4">Support</h2>
          <p className="mb-2 text-[#ddd] text-[0.9rem]">
            12, EasyMart Street, Lagos, Nigeria
          </p>
          <p className="mb-2 text-[#ddd] text-[0.9rem]">easymart@gmail.com</p>
          <p className=" text-[#ddd] text-[0.9rem]">+234 810 821 8964</p>
        </div>
        <div>
          <h2 className="font-semibold text-lg mb-4">Account</h2>
          <ul className="text-[0.9rem] text-[#ddd]">
            <li className="mb-2">
              <Link href="/account">My account</Link>
            </li>
            <li className="mb-2">
              <Link href="/signup">Login / Register</Link>
            </li>
            <li className="mb-2">
              <Link href="/cart">Cart</Link>
            </li>
            <li className="mb-2">
              <Link href="/wishlist">Wishlist</Link>
            </li>
            <li>
              <Link href="/products">Shop</Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font-semibold text-lg mb-4">Quick Links</h2>
          <ul className="text-[0.9rem] text-[#ddd]">
            <li className="mb-2">
              <a href="#">Privacy Policy</a>
            </li>
            <li className="mb-2">
              <a href="#">Terms of Use</a>
            </li>
            <li className="mb-2">
              <a href="#">FAQs</a>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font-semibold text-lg mb-4">Follow Us</h2>
          <div className="flex items-center gap-4">
            <Facebook className="w-5 cursor-pointer" />
            <Twitter className="w-5 cursor-pointer" />
            <Linkedin className="w-5 cursor-pointer" />
            <Instagram className="w-5 cursor-pointer" />
          </div>
        </div>
      </Container>
    </footer>
  );
}
