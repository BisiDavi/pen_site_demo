import useCartContext from "@/hooks/useCartContext";
import type { cartType, productType } from "@/types";

export default function useCart() {
  const { cart, setCart } = useCartContext();

  function addToCart(product: productType) {
    const { title, image, price } = product;
    const cartProduct = cart.filter(
      (cartItem: cartType) => cartItem.title === title
    );

    const cartValue = cartProduct
      ? [{ ...cartProduct[0], quantity: cartProduct[0].quantity + 1 }]
      : [
          {
            title,
            image,
            quantity: 1,
            price,
          },
        ];

    setCart(cartValue);
  }

  return { addToCart };
}
