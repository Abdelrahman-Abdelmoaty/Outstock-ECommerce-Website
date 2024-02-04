"use client";
import CartItem from "./CartItem";
import Wrapper from "@src/components/Wrapper/Wrapper";
import { useCart } from "@src/redux/slices/cartSlice";
import { useUser } from "@src/redux/slices/userSlice";
import { redirect } from "next/navigation";

export default function page() {
  const user = useUser();
  const cart = useCart();
  if (!user.user) redirect("/auth");
  return (
    <Wrapper>
      <div className="mx-auto my-12 min-h-[50vh]">
        <div className="my-auto">
          <p className="mb-10 text-center text-4xl font-semibold">Cart</p>
        </div>
        {cart.products.length === 0 ? (
          <div>
            <p className="text-center text-2xl">Nothing in the cart!</p>
          </div>
        ) : (
          cart.products.map((product, idx) => (
            <CartItem key={idx} cartProduct={product} />
          ))
        )}
      </div>
    </Wrapper>
  );
}
