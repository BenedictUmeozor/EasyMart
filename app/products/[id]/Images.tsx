"use client";
import Image from "next/image";
import { useState } from "react";
import { v4 as uuidV4 } from "uuid";

type Props = {
  images: string[];
  title: string;
};

export default function Images({ images, title }: Props) {
  const [index, setIndex] = useState(0);

  const handleChange = (i: number) => {
    setIndex(i);
  };

  return (
    <div className=" items-center flex flex-col gap-4">
      <Image
        src={images[index]}
        alt={title}
        height={500}
        width={500}
        className="rounded flex-3 max-w-[100%] object-contain max-h-96"
      />

      <div className="flex-1 flex gap-4 justify-between">
        {images.map((image, i) => (
          <div
            key={uuidV4()}
            className="w-full flex rounded shadow justify-center"
            onClick={() => handleChange(i)}
          >
            <Image
              src={image}
              alt={title}
              height={500}
              width={500}
              className={
                "w-full rounded cursor-pointer border hover:scale-105 hover:border hover:border-crimson object-contain max-w-[150px] " +
                (i === index ? "border-crimson" : "border-transparent")
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
}
