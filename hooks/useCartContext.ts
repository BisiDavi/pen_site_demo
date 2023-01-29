import { useContext } from "react";
import CartContext from "@/context/cartContext";

export default function useCartContext() {
  const cartContext = useContext(CartContext);

  if (!cartContext) {
    throw new Error("cartContext has to be used within <CartContext.Prodiver>");
  }
  const { cart, setCart } = cartContext;

  return {
    cart,
    setCart,
  };
}
