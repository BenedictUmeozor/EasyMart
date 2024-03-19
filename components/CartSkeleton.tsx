"use client";

import Skeleton from "react-loading-skeleton";

export default function CartSkeleton() {
  return (
    <div>
      <div className="mt-4">
        <Skeleton height={60} width={"100%"} />
      </div>
      <div className="mt-4">
        <Skeleton height={60} width={"100%"} />
      </div>
      <div className="mt-4">
        <Skeleton height={60} width={"100%"} />
      </div>
    </div>
  );
}
