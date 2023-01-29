import Head from "next/head";
import { PropsWithChildren, useState } from "react";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import styles from "@/styles/Home.module.css";
import useCart from "@/hooks/useCart";

export default function Layout({ children }: PropsWithChildren) {
  const [cart, setCart] = useState([]);
  const { CartContext } = useCart();

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
