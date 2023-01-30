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

export type formElementType = {
  name: string;
  label: string;
  contentType: string;
  type: string;
};

export type lineItemsType = {
  price_data: {
    currency: string;
    product_data: {
      name: string;
      images: string[];
    };
    unit_amount: number;
  };
  quantity: number;
};
