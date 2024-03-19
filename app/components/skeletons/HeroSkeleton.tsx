"use client"

import Skeleton from "react-loading-skeleton";

export default function HeroSkeleton() {
  return (
    <div className="w-[90%] mx-auto">
        <Skeleton height={300} />
    </div>
  )
}