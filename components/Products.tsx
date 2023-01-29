import Product from "@/components/Product";
import products from "@/json/products.json";
import styles from "@/styles/Home.module.css";

export default function Products() {
  return (
    <ul className={styles.products}>
      {products.map((product) => (
        <Product product={product} key={product.title} />
      ))}
    </ul>
  );
}
