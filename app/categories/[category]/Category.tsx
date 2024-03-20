import Link from "next/link";
import { ReactNode } from "react";

export default function Category({
  category,
  children,
}: {
  children: ReactNode;
  category: string;
}) {
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
