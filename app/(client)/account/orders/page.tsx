import { Suspense } from "react";
import OrderContainer from "./OrderContainer";

export default function Page() {
  return (
    <section>
      <Suspense fallback={<div>Loading...</div>}>
        <OrderContainer />
      </Suspense>
    </section>
  );
}
