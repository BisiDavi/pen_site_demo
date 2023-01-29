import Image from "next/image";
import type { productType } from "@/types";
import styles from "@/styles/Home.module.css";

interface Props {
  product: productType;
}

export default function Product({ product }: Props) {
  return (
    <li>
      <Image src={product.image} alt={product.title} height={500} width={500} />
      <div className={styles.product_text}>
        <h4>{product.title}</h4>
        <h5>${product.price}</h5>
        <button>
          <span>+</span> Add to Cart
        </button>
      </div>
    </li>
  );
}
