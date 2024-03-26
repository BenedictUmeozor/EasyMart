import { Suspense } from "react";
import Form from "./Form";
import SkeletonForm from "./Skeleton";

export default function Account() {
  return (
    <div>
      <h2 className="text-xl text-crimson mb-8">Edit your Profile</h2>
      <Suspense fallback={<SkeletonForm />}>
        <Form />
      </Suspense>
    </div>
  );
}
