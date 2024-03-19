import Image from "next/image";

export default function Images() {
  return (
    <div className="flex items-center gap-4">
      <div className="flex-1 flex flex-col items-center gap-4 justify-between">
        <div className="w-full flex items-center justify-center">
          <Image
            src={"https://cdn.dummyjson.com/product-images/11/thumbnail.jpg"}
            alt="image"
            height={500}
            width={500}
            className="w-full rounded cursor-pointer hover:scale-105 hover:border hover:border-crimson"
          />
        </div>
        <div className="w-full flex items-center justify-center">
          <Image
            src={"https://cdn.dummyjson.com/product-images/11/thumbnail.jpg"}
            alt="image"
            height={500}
            width={500}
            className="w-full rounded cursor-pointer hover:scale-105 hover:border hover:border-crimson"
          />
        </div>
        <div className="w-full flex items-center justify-center">
          <Image
            src={"https://cdn.dummyjson.com/product-images/11/thumbnail.jpg"}
            alt="image"
            height={500}
            width={500}
            className="w-full rounded cursor-pointer hover:scale-105 hover:border hover:border-crimson"
          />
        </div>
        <div className="w-full flex items-center justify-center">
          <Image
            src={"https://cdn.dummyjson.com/product-images/11/thumbnail.jpg"}
            alt="image"
            height={500}
            width={500}
            className="w-full rounded cursor-pointer hover:scale-105 hover:border hover:border-crimson"
          />
        </div>
      </div>

      <Image
        src={"https://cdn.dummyjson.com/product-images/11/thumbnail.jpg"}
        alt="image"
        height={500}
        width={500}
        className="rounded flex-3"
      />
    </div>
  );
}
