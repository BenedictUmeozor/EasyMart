import Container from "@/components/Container";
import HeroSkeleton from "./skeletons/HeroSkeleton";
import Hero from "./Hero";
import { Suspense } from "react";
import Link from "next/link";
import { CategoryType } from "@/types/types";

export default async function HeroSection() {
  const categories: CategoryType[] = await fetch(
    "https://dummyjson.com/products/categories"
  ).then((res) => res.json());
  const formatted = categories.map((c) => c.slug);

  return (
    <div>
      <Container className="md:grid grid-cols-4 py-4">
        <div className="max-md:hidden col-span-1 border-r border-r-[#ddd]">
          <ul>
            {formatted.slice(0, 9).map((category) => (
              <li key={category} className="block my-4">
                <Link
                  href={"/categories/" + category}
                  className="capitalize text-base hover:text-crimson"
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
