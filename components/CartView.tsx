import Image from "next/image";

import useCartContext from "@/hooks/useCartContext";
import Trash from "@/public/Trash";
import useCart from "@/hooks/useCart";
import ShoppingCart from "@/public/Cart";
import { formatPrice } from "@/utils/formatPrice";

export default function CartView() {
  const { cart } = useCartContext();
  const { deleteProduct, getTotal, updateProductQuantity } = useCart();
  const total = getTotal();

  return (
    <div className="cart-view">
      {cart.length > 0 ? (
        <>
          <ul className="cart">
            {cart.map((item) => {
              const amount = item.quantity * item.price;
              return (
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
                      {item.price} X {item.quantity} = ${formatPrice(amount)}
                    </h5>
                    <div className="control-group">
                      <div className="controls">
                        <button
                          className="add"
                          onClick={() =>
                            updateProductQuantity(item.title, "inc")
                          }
                        >
                          <span>+</span>
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          className="minus"
                          onClick={() =>
                            updateProductQuantity(item.title, "dec")
                          }
                        >
                          <span>-</span>
                        </button>
                      </div>
                      <button onClick={() => deleteProduct(item.title)}>
                        <Trash />
                      </button>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
          <div className="total-view">
            <div className="total">
              <h4>Total</h4>
              <h4>${formatPrice(total)} </h4>
            </div>
            <div className="shipping">
              <h4>Shipping</h4>
              <h4>${formatPrice(0)}</h4>
            </div>
          </div>
        </>
      ) : (
        <div className="empty-cart">
          <div className="cart-icon">
            <ShoppingCart />
            <p>Cart is empty</p>
          </div>
        </div>
      )}
      <style jsx>
        {`
          .cart-icon {
            width: 200px;
            display: flex;
            justify-content: center;
            margin: auto;
            flex-direction: column;
          }
          .cart-icon p {
            margin: 0px;
            text-align: center;
            font-weight: bold;
            font-size: 20px;
            font-family: "Fira Mono", sans-serif;
          }
          .cart {
            display: flex;
            flex-direction: column;
            padding: 0px;
            width: 100%;
            margin: 0px;
          }

          .cart li {
            display: flex;
            margin: 0px 0px;
            border-bottom: 1px solid #a6a1a1a8;
            padding-bottom: 10px;
            align-items: center;
            padding: 10px;
          }

          .cart li:hover {
            background-color: #d6d1d157;
          }

          .cart li .text-content {
            margin-left: 20px;
            width: 100%;
          }

          .cart .text-content h4 {
            font-size: 20px;
            margin: 0px;
          }

          .cart .text-content h5 {
            font-size: 18px;
            margin: 8px 0px;
          }

          .control-group {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
          }

          .control-group button {
            border: none;
            border-radius: 5px;
            padding: 5px;
            cursor: pointer;
          }

          .controls {
            display: flex;
            width: 30%;
            justify-content: space-between;
            align-items: center;
          }

          .controls span {
            font-size: 25px;
            font-weight: bold;
          }

          .controls button {
            font-size: 40px;
            height: 35px;
            width: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
          }

          .controls .add {
            background-color: green;
          }

          .controls button span {
            font-size: 30px;
            padding: 0px;
            margin-top: -4px;
          }

          .controls .minus {
            background-color: red;
          }

          .controls button:hover {
            opacity: 0.8;
          }

          .total-view div {
            display: flex;
            justify-content: space-between;
            margin: 0px;
          }
          .total-view div h4 {
            margin: 10px 0px;
          }
        `}
      </style>
    </div>
  );
}
