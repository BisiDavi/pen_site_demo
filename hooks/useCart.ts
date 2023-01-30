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

  function updateProductQuantity(title: string, type: "inc" | "dec") {
    const cartTemp = [...cart];
    const productIndex = cartTemp.findIndex((item) => item.title === title);
    let productQuantity = cart[productIndex].quantity;

    if (type === "inc") {
      cart[productIndex].quantity += 1;
    } else if (type === "dec" && productQuantity > 1) {
      cart[productIndex].quantity -= 1;
    }
    setCart(cartTemp);
  }

  function getTotal() {
    const total: any = cart.reduce((a, b): any => {
      const amount = a.price * a.quantity;
      const amount2 = b.price * b.quantity;
      const sumTotal = amount + amount2;
      return sumTotal;
    });
    return total;
  }

  function deleteProduct(title: string) {
    const productIndex = cart.findIndex((item) => item.title === title);
    const cartTemp = [...cart];
    cartTemp.splice(productIndex, 1);
    console.log("cartTemp", cartTemp);
    setCart(cartTemp);
  }

  return { addToCart, deleteProduct, updateProductQuantity, getTotal };
}
