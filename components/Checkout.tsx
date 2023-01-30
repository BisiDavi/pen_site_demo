import CartView from "@/components/CartView";
import CheckoutForm from "./form/CheckoutForm";

export default function Checkout() {
  return (
    <>
      <div className="checkout">
        <CheckoutForm />
        <CartView />
      </div>
      <style jsx>
        {`
          .checkout {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
        `}
      </style>
    </>
  );
}
