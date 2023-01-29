import { createContext } from "react";

export default function useCart() {
  const CartContext = createContext<any>(null);

  return { CartContext };
}
