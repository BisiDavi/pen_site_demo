import useCartContext from "@/hooks/useCartContext";
import type { productType } from "@/types";

export default function useCart() {
  const { cart, setCart } = useCartContext();

  function addToCart(product: productType) {
    const { title, image, price } = product;
    const cartProduct = cart.filter((cartItem) => cartItem.title === title);
    const cartProductIndex = cart.findIndex(
      (cartItem) => cartItem.title === title
    );
    let cartValue;

    if (cartProduct[0]) {
      cart[cartProductIndex].quantity += 1;
      cartValue = cart;
    } else {
      cartValue = [
        ...cart,
        {
          title,
          image,
          quantity: 1,
          price,
        },
      ];
    }

    setCart(cartValue);
  }

  return { addToCart };
}

// [{ ...cartProduct[0], quantity: cartProduct[0].quantity + 1 }]
