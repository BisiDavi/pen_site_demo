import { createContext } from "react";
import { cartContextType } from "@/types";

const CartContext = createContext<cartContextType | null>(null);

export default CartContext;
