import Container from "@/components/Container";
import { categories } from "./data";
import HeroSkeleton from "./skeletons/HeroSkeleton";
import Hero from "./Hero";
import { Suspense } from "react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div>
      <Container className="md:grid grid-cols-4 py-4">
        <div className="max-md:hidden col-span-1 border-r border-r-[#ddd]">
          <ul>
            {categories.slice(0, 8).map((category) => (
              <li key={category} className="block my-4">
                <Link
                  href={"/categories/" + category}
                  className="capitalize text-[0.9rem]"
                >
                  {category}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-3">
          <Suspense fallback={<HeroSkeleton />}>
            <Hero />
          </Suspense>
        </div>
      </Container>
    </div>
  );
}
