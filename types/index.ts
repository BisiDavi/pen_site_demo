import type { Dispatch, SetStateAction } from "react";

export type cartType = {
  title: string;
  price: number;
  quantity: number;
  image: string;
};

export type productType = {
  title: string;
  price: number;
  image: string;
};

export type cartContextType = {
  cart: Array<cartType>;
  setCart: Dispatch<SetStateAction<cartType[]>>;
};
