import Head from "next/head";
import type { PropsWithChildren } from "react";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div>
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
      <main>{children}</main>
      <Footer />
    </div>
  );
}
