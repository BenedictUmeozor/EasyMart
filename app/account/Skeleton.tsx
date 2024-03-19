"use client";

import Skeleton from "react-loading-skeleton";

export default function SkeletonForm() {
  return (
    <div>
      <div className="flex items-center gap-4 mb-8">
        <div className="flex-1">
          <Skeleton width={40} />
          <Skeleton height={48} width={"100%"} />
        </div>
        <div className="flex-1">
          <Skeleton width={40} />
          <Skeleton height={48} width={"100%"} />
        </div>
      </div>
      <div className="flex items-center gap-4 mb-8">
        <div className="flex-1">
          <Skeleton width={40} />
          <Skeleton height={48} width={"100%"} />
        </div>
        <div className="flex-1">
          <Skeleton width={40} />
          <Skeleton height={48} width={"100%"} />
        </div>
      </div>
      <div className="mb-8">
        <div className="mb-4">
          <Skeleton height={48} width={"100%"} />
        </div>
        <div className="mb-4">
          <Skeleton height={48} width={"100%"} />
        </div>
        <div className="mb-4">
          <Skeleton height={48} width={"100%"} />
        </div>
        <div className="flex items-center justify-end">
          <div className="flex items-center w-[45%] gap-4">
            <Skeleton height={48} className="flex-1" />
            <Skeleton height={48} className="flex-[2]" />
          </div>
        </div>
      </div>
    </div>
  );
}
