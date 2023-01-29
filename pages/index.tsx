import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import products from "@/json/products.json";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome to GetthisGreen </title>
        <meta
          name="description"
          content="Buy classic pens built for elegance"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
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
      </main>
    </>
  );
}
