import { cartType, lineItemsType } from "@/types";
import axios from "axios";

export default async function makePayment(email: string, cart: cartType[]) {
  const emailAddress = email ? { customer_email: email } : "";
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

  const result = {
    ...emailAddress,
    line_items,
  };
  console.log("result", result);

  return axios
    .post("/api/make-payment-stripe", { ...result })
    .then((response) => {
      console.log("response stripe", response);
      window.location.href = response?.data?.session.url;
    });
}
