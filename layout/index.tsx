import Head from "next/head";
import { useState } from "react";
import type { PropsWithChildren } from "react";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import CartContext from "@/context/cartContext";
import { cartType } from "@/types";
import styles from "@/styles/Home.module.css";

export default function Layout({ children }: PropsWithChildren) {
  const [cart, setCart] = useState<Array<cartType>>([]);

  console.log("cart", cart);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <Head>
        <title>Welcome to GetthisGreen </title>
        <meta
          name="description"
          content="Buy classic pens built for elegance"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </CartContext.Provider>
  );
}
