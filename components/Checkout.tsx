import CartView from "@/components/CartView";

export default function Checkout() {
  return (
    <>
      <div className="checkout">
        <form>
          <button>Checkout</button>
        </form>
        <CartView />
      </div>
      <style jsx>
        {`
          .checkout {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
          }
        `}
      </style>
    </>
  );
}
