import Layout from "@/layout";
import Products from "@/components/Products";
import Tabs from "@/components/Tabs";
import Checkout from "@/components/Checkout";

export default function Home() {
  return (
    <Layout>
      <h3>Shop Our Collection</h3>
      <Tabs tab1={<Products />} tab2={<Checkout />} />
    </Layout>
  );
}
