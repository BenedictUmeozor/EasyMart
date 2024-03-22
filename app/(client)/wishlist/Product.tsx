import Image from "next/image";
import { ShoppingCart, Trash2 } from "react-feather";

export default function Product() {
  return (
    <div className="h-[300px] flex flex-col rounded-md  shadow-lg">
      <div className="relative h-[80%] w-full bg-secondary flex items-center justify-center overflow-hidden">
        <Image
          src="https://cdn.dummyjson.com/product-images/11/thumbnail.jpg"
          alt="product"
          height={200}
          width={200}
          className="w-full h-full duration-700 hover:scale-105"
        />
        <button className="absolute bottom-0 left-0 w-full bg-black text-white p-2 text-[0.9rem] flex items-center justify-center gap-2">
          <ShoppingCart className="w-4 " />
          Add to cart
        </button>
        <div className="absolute top-0 left-0 w-full bg-transparent z-[2] flex items-center justify-between p-2">
          <div className="flex items-center justify-center rounded text-white bg-crimson px-2 py-1 text-xs">
            -13%
          </div>
          <div className="bg-white h-6 w-6 cursor-pointer rounded-[50%] flex items-center justify-center">
            <Trash2 className="w-4 text transition-all duration-300 ease-linear hover:scale-105" />
          </div>
        </div>
      </div>
      <div className="w-full h-[20%] p-1">
        <h4 className="text-base font-semibold">Perfume Oil</h4>
        <div className="text-[0.9rem] font-semibold flex items-center gap-2">
          <span className=" text-hover_red">$50</span>{" "}
          <span className="text-[#aaa]">$70</span>
        </div>
      </div>
    </div>
  );
}
