import axios from "axios";

import type { cartType, lineItemsType } from "@/types";

export default function useStripePayment(cart: cartType[], email: string) {
  let line_items: Array<lineItemsType> = [];

  if (cart) {
    cart.map((item) => {
      line_items.push({
        price_data: {
          currency: "usd",
          product_data: {
            name: item.title,
            images: [item.image],
          },
          unit_amount: Math.round(item.price * 100),
        },
        quantity: item.quantity,
      });
    });   
  }
  const emailAddress = email ? { customer_email: email } : "";

  const result = {
    ...emailAddress,
    line_items,
  };

  async function makePayment() {
    return await axios
      .post("/api/stripe-server", { ...result })
      .then((response) => {
        console.log("response", response);
        window.location.href = response.data.session.url;
      });
  }

  return { makePayment };
}
