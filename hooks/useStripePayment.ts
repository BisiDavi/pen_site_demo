import axios from "axios";

import type { lineItemsType } from "@/types";
import useCartContext from "@/hooks/useCartContext";

export default function useStripePayment() {
  let line_items: Array<lineItemsType> = [];
  const { cart } = useCartContext();

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

  async function makePayment(email: string) {
    const emailAddress = email ? { customer_email: email } : "";

    const result = {
      ...emailAddress,
      line_items,
    };
    return await axios
      .post("/api/stripe-server", { ...result })
      .then((response) => {
        console.log("response", response);
        window.location.href = response.data.session.url;
      });
  }

  return { makePayment };
}
