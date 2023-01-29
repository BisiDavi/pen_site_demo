import Image from "next/image";
import products from "@/json/products.json";
import Layout from "@/layout";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Layout>
        <h3>Shop Our Collection</h3>
        <ul className="products">
          {products.map((product) => (
            <li key={product.title}>
              <Image
                src={product.image}
                alt={product.title}
                height={500}
                width={500}
              />
              <div className={styles.product_text}>
                <h4>{product.title}</h4>
                <h5>${product.price}</h5>
                <button>
                  <span>+</span> Add to Cart
                </button>
              </div>
            </li>
          ))}
        </ul>
      </Layout>
    </>
  );
}
