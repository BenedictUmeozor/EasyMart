import { Product } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "react-feather";

const getProduct = async () => {
  const res = await fetch(
    `https://dummyjson.com/products/${Math.floor(Math.random() * 100)}`,
    { cache: "no-store" }
  );
  return res.json();
};

export default async function Hero() {
  const product: Product = await getProduct();

  return (
    <div className="bg-black text-white flex p-12 rounded justify-between w-[90%] mx-auto max-h-96">
      <div className="flex-1 flex flex-col gap-4 justify-between">
        <p>{product.title}</p>
        <p className="text-2xl">
          {product.description.length > 100
            ? product.description.substring(0, 100) + "..."
            : product.description}
        </p>
        <Link
          href={"/products/" + product.id}
          className="underline flex items-center gap-2"
        >
          Shop now <ArrowRight className="w-4" />
        </Link>
      </div>
      <div className="flex-1 h-full">
        <Image
          src={product.thumbnail}
          alt="Image"
          height={500}
          width={500}
          className="w-full h-full max-h-80 mx-auto object-contain"
        />
      </div>
    </div>
  );
}
