import Image from "next/image";
import { useContext } from "react";

import CartContext from "@/context/cartContext";
import styles from "@/styles/Home.module.css";
import type { productType } from "@/types";

interface Props {
  product: productType;
}

export default function Product({ product }: Props) {
  const { cart, setCart } = useContext(CartContext);
  const { title, image, price } = product;

  console.log("cartContext", cart);

  function addToCart() {
    setCart([
      ...cart,
      {
        title,
        image,
        quantity: 1,
        price,
      },
    ]);
  }

  return (
    <li>
      <Image src={image} alt={title} height={500} width={500} />
      <div className={styles.product_text}>
        <h4>{title}</h4>
        <h5>${price}</h5>
        <button onClick={addToCart}>
          <span>+</span> Add to Cart
        </button>
      </div>
    </li>
  );
}
