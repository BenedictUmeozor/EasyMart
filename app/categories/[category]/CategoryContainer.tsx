import Products from "@/app/components/Products";
import Title from "@/app/components/Title";
import { ProductList } from "@/types/types";
import Link from "next/link";
import { notFound } from "next/navigation";
import Category from "./Category";
import { Home, ShoppingBag, Smartphone, Watch } from "react-feather";
import { ComputerDesktopIcon } from "@heroicons/react/24/solid";
import Perfume from "@/assets/icons/Perfume";
import skincare from "@/assets/beauty-icon.svg";
import Image from "next/image";
import furniture from "@/assets/bedroom-icon.svg";
import tops from "@/assets/men-t-shirts-icon.svg";
import womenDresses from "@/assets/dress-icon.svg";
import womenShoes from "@/assets/heel-sandal-icon.svg";
import menShirts from "@/assets/m-size-shirt-icon.svg";
import menShoes from "@/assets/man-shoe-icon.svg";
import womenWatches from "@/assets/smartwatch-heart-icon.svg";
import womenBags from "@/assets/fashion-purse-icon.svg";
import jewellery from "@/assets/necklace-jewellery-icon.svg";
import sunglasses from "@/assets/fashion-glasses-icon.svg";
import automotive from "@/assets/steering-wheel-icon.svg";
import motorcycle from "@/assets/bike-motorcycle-icon.svg";
import lighting from "@/assets/bulb-light-icon.svg";

type Props = {
  category: string;
};

const getProducts = async (category: string) => {
  const res = await fetch(
    `https://dummyjson.com/products/category/${category}`,
    { cache: "no-store" }
  );

  return res.json();
};

const getOtherProducts = async () => {
  const res = await fetch(
    `https://dummyjson.com/products?limit=5&skip=${Math.floor(
      Math.random() * 90
    )}`,
    { cache: "no-store" }
  );

  return res.json();
};

export default async function CategoryContainer({ category }: Props) {
  const productList: ProductList = await getProducts(category);
  const secondProductList: ProductList = await getOtherProducts();

  if (productList.total === 0) {
    notFound();
  }

  return (
    <div>
      <Products products={productList.products} />
      <div className="mt-16">
        <Title title="Other Categories" />
        <h2 className="text-3xl font-semibold mb-8 mt-4 capitalize">
          Explore other categories
        </h2>
        <div className="grid grid-cols-8 gap-4">
          <Category category="smartphones">
            <Smartphone className="w-8" />
          </Category>
          <Category category="laptops">
            <ComputerDesktopIcon className="w-8" />
          </Category>
          <Category category="fragrances">
            <Perfume className="w-8" />
          </Category>
          <Category category="skincare">
            <Image
              src={skincare}
              alt="skincare"
              height={32}
              width={32}
              className="w-8"
            />
          </Category>
          <Category category="groceries">
            <ShoppingBag className="w-8" />
          </Category>
          <Category category="home-decoration">
            <Home className="w-8" />
          </Category>
          <Category category="furniture">
            <Image
              src={furniture}
              alt="furniture"
              height={32}
              width={32}
              className="w-8"
            />
          </Category>
          <Category category="tops">
            <Image
              src={tops}
              alt="tops"
              height={32}
              width={32}
              className="w-8"
            />
          </Category>
          <Category category="womens-dresses">
            <Image
              src={womenDresses}
              alt="womens-dresses"
              height={32}
              width={32}
              className="w-8"
            />
          </Category>
          <Category category="womens-shoes">
            <Image
              src={womenShoes}
              alt="womens-shoes"
              height={32}
              width={32}
              className="w-8"
            />
          </Category>
          <Category category="mens-shirts">
            <Image
              src={menShirts}
              alt="mens-shirts"
              height={32}
              width={32}
              className="w-8"
            />
          </Category>
          <Category category="mens-shoes">
            <Image
              src={menShoes}
              alt="mens-shoes"
              height={32}
              width={32}
              className="w-8"
            />
          </Category>
          <Category category="mens-watches">
            <Watch className="w-8" />
          </Category>
          <Category category="womens-watches">
            <Image
              src={womenWatches}
              alt="womens-watches"
              height={32}
              width={32}
              className="w-8"
            />
          </Category>
          <Category category="womens-bags">
            <Image
              src={womenBags}
              alt="womens-bags"
              height={32}
              width={32}
              className="w-8"
            />
          </Category>
          <Category category="womens-jewellery">
            <Image
              src={jewellery}
              alt="womens-jewellery"
              height={32}
              width={32}
              className="w-8"
            />
          </Category>
          <Category category="sunglasses">
            <Image
              src={sunglasses}
              alt="sunglasses"
              height={32}
              width={32}
              className="w-8"
            />
          </Category>

          <Category category="automotive">
            <Image
              src={automotive}
              alt="automotive"
              height={32}
              width={32}
              className="w-8"
            />
          </Category>
          <Category category="motorcycle">
            <Image
              src={motorcycle}
              alt="motorcycle"
              height={32}
              width={32}
              className="w-8"
            />
          </Category>
          <Category category="lighting">
            <Image
              src={lighting}
              alt="lighting"
              height={32}
              width={32}
              className="w-8"
            />
          </Category>
        </div>
      </div>
      <div className="mt-16">
        <Title title="Explore" />
        <h2 className="text-3xl font-semibold mb-8 mt-4 capitalize">
          Explore other products
        </h2>
        <Products products={secondProductList.products} />
        <div className="mt-8 text-center">
          <Link
            href="/products?page=1"
            className=" bg-crimson text-white py-2 px-4 rounded text-[0.9rem]"
          >
            View All Products
          </Link>
        </div>
      </div>
    </div>
  );
}
