"use client";

import Skeleton from "react-loading-skeleton";

export default function ProductsSkeleton() {
  return (
    <div className="grid grid-cols-5 max-md:grid-cols-2 gap-4">
      <div>
        <Skeleton height={200} width={"100%"} />
      </div>
      <div>
        <Skeleton height={200} width={"100%"} />
      </div>
      <div>
        <Skeleton height={200} width={"100%"} />
      </div>
      <div>
        <Skeleton height={200} width={"100%"} />
      </div>
      <div>
        <Skeleton height={200} width={"100%"} />
      </div>
    </div>
  );
}
