import { CategoryType } from "@/types/types";
import Link from "next/link";
import { ReactNode } from "react";

export default async function Category({
  category,
  children,
}: {
  children: ReactNode;
  category: string;
}) {
  const categories: CategoryType[] = await fetch(
    "https://dummyjson.com/products/categories"
  ).then((res) => res.json());
  const formatted = categories.map((c) => c.slug);

  if (!formatted.includes(category)) {
    return null;
  }

  return (
    <Link
      href={`/categories/${category}`}
      className="flex flex-col items-center justify-center gap-4 border-2 border-[#eee] p-4 rounded hover:border-crimson duration-75"
    >
      {children}
      <p className="text-[0.9rem] text-[#333] capitalize text-center">
        {category.replace("-", " ")}
      </p>
    </Link>
  );
}
