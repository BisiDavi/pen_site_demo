import Image from "next/image";

import useCartContext from "@/hooks/useCartContext";
import ShoppingCart from "@/public/Cart";

export default function Header() {
  const { cart } = useCartContext();

  return (
    <>
      <header className="header">
        <Image alt="logo" src="/logo.webp" height={100} width={300} />
        <div className="cart">
          {cart.length > 0 && <span className="quantity">{cart.length}</span>}
          <ShoppingCart />
        </div>
      </header>
      <style jsx>
        {`
          .header {
            background-color: white;
            height: 100px;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            box-shadow: 0px 5px 15px rgb(0 0 0 / 15%);
            position: relative;
          }
          .cart {
            position: absolute;
            right: 40px;
            height: 20px;
            width: 40px;
            top: 25px;
          }
        `}
      </style>
    </>
  );
}
