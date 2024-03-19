import Container from "@/components/Container";
import { categories } from "./data";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "react-feather";
import HeroSkeleton from "./skeletons/HeroSkeleton";

export default function HeroSection() {
  return (
    <div>
      <Container className="grid grid-cols-4 py-4">
        <div className="col-span-1 border-r border-r-[#ddd]">
          <ul>
            {categories.slice(0, 8).map((category) => (
              <li key={category} className="block my-4">
                <a href={"#" + category} className="capitalize text-[0.9rem]">
                  {category}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-3">
          {/* <HeroSkeleton /> */}
          <div className="bg-black text-white flex p-12 rounded justify-between w-[90%] mx-auto">
            <div className="flex-1 flex flex-col gap-4 justify-between">
              <p>iPhone 9</p>
              <p className="text-4xl">
                An apple mobile which is nothing like apple
              </p>
              <Link href={"/"} className="underline flex items-center gap-2">
                Shop now <ArrowRight className="w-4" />
              </Link>
            </div>
            <div className="flex-1">
              <Image
                src={"https://cdn.dummyjson.com/product-images/1/thumbnail.jpg"}
                alt="Image"
                height={500}
                width={500}
                className="w-full h-full mx-auto"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
