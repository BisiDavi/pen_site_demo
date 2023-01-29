import Image from "next/image";
import { useContext } from "react";
import useCart from "@/hooks/useCart";
import ShoppingCart from "@/public/Cart";

export default function Header() {
  const { CartContext } = useCart();
  const cartContext = useContext(CartContext);
  return (
    <>
      <header className="header">
        <Image alt="logo" src="/logo.webp" height={100} width={300} />
        <div className="cart">
          {cartContext && (
            <span className="quantity">{cartContext.cart.length}</span>
          )}
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
