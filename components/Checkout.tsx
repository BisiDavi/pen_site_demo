import useCartContext from "@/hooks/useCartContext";
import Image from "next/image";

export default function Checkout() {
  const { cart } = useCartContext();

  return (
    <>
      <div className="checkout">
        <form></form>
        <ul className="cart">
          {cart.map((item) => (
            <li key={item.title}>
              <Image
                src={item.image}
                alt={item.title}
                height={100}
                width={100}
              />
              <div className="text-content">
                <h4>{item.title}</h4>
                <h5>
                  {item.quantity} X {item.price} = {item.quantity * item.price}
                </h5>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <style jsx>
        {`
          .checkout {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
          }
          .cart {
            display: flex;
            flex-direction: column;
            padding: 0px;
          }

          .cart li {
            display: flex;
            margin: 10px 0px;
          }
        `}
      </style>
    </>
  );
}
