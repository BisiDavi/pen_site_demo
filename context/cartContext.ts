import { createContext } from "react";
import type { Dispatch, SetStateAction } from "react";
import { cartType } from "@/types";

const CartContext = createContext<{
  cart: Array<cartType>;
  setCart: Dispatch<SetStateAction<cartType[]>>;
} | any>(null);

export default CartContext;
