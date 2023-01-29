import Layout from "@/layout";
import Product from "@/components/Product";
import products from "@/json/products.json";

export default function Home() {
  return (
    <Layout>
      <h3>Shop Our Collection</h3>
      <ul className="products">
        {products.map((product) => (
          <Product product={product} key={product.title} />
        ))}
      </ul>
    </Layout>
  );
}
