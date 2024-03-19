"use client";

import Skeleton from "react-loading-skeleton";

export default function ImageSkeleton() {
  return (
    <div>
      <Skeleton width={"100%"} height={400} />
    </div>
  );
}
