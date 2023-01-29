import { createContext } from "react";
import type { Dispatch, SetStateAction } from "react";
import { cartType } from "@/types";

export default function useCart() {
  const CartContext = createContext<{
    cart: Array<cartType>;
    setCart: Dispatch<SetStateAction<cartType[]>>;
  } | null>(null);

  return { CartContext };
}
