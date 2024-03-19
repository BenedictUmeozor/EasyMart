"use client";

import Skeleton from "react-loading-skeleton";

export default function TextSkeleton() {
  return (
    <div>
      <Skeleton width={100} />

      <Skeleton width={50} className="mt-5" />
      <p className="mb-8">
        <Skeleton width={"100%"} height={100} />
      </p>
      <hr />
      <div className="mt-8">
        <Skeleton height={200} width={"100%"} />
        <div className="mt-8 flex items-center gap-4">
          <Skeleton height={48} className="flex-1" />
          <Skeleton height={48} className="flex-1" />
        </div>
      </div>
    </div>
  );
}
