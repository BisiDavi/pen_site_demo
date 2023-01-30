import Image from "next/image";

import useCart from "@/hooks/useCart";
import type { productType } from "@/types";
import styles from "@/styles/Home.module.css";

interface Props {
  product: productType;
}

export default function Product({ product }: Props) {
  const { title, image, price } = product;
  const { addToCart } = useCart();

  return (
    <li>
      <Image
        src={image}
        alt={title}
        height={500}
        width={500}
        placeholder="blur"
        blurDataURL={image}
      />
      <div className={styles.product_text}>
        <h4>{title}</h4>
        <h5>${price}</h5>
        <button onClick={() => addToCart(product)}>
          <span>+</span> Add to Cart
        </button>
      </div>
    </li>
  );
}
