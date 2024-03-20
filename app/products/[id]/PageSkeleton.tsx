"use client";

import Container from "@/components/Container";
import ImageSkeleton from "./ImageSkeleton";
import TextSkeleton from "./TextSkeleton";

export default function PageSkeleton() {
  return (
    <Container className="grid grid-cols-5 gap-10 items-center">
      <div className="col-span-3">
        <ImageSkeleton />
      </div>
      <div className="col-span-2">
        <TextSkeleton />
      </div>
    </Container>
  );
}
