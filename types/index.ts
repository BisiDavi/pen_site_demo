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

export type addressType = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  city: string;
  state: string;
  country: string;
};

export type addressContextType = {
  address: addressType;
  setAddress: Dispatch<SetStateAction<addressType>>;
};

export type FormElementType = {
  name: string;
  label: string;
  contentType: string;
};
