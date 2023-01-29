import Product from "@/components/Product";
import products from "@/json/products.json";

export default function Products() {
  return (
    <ul className="products">
      {products.map((product) => (
        <Product product={product} key={product.title} />
      ))}
    </ul>
  );
}
