"use client";

import Container from "@/components/Container";
import { useCartContext } from "@/context/CartProvider";
import CartTable from "./CartTable";
import CartSummary from "./CartSummary";
import EmptyCart from "./EmptyCart";

export default function Cart() {
  const { cart } = useCartContext();

  return (
    <div className="py-12">
      <Container>
        {cart.length > 0 && (
          <>
            <CartTable />
            <CartSummary />
          </>
        )}
        {cart.length === 0 && <EmptyCart />}
      </Container>
    </div>
  );
}
