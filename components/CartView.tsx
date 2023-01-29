import useCartContext from "@/hooks/useCartContext";
import Image from "next/image";
import Trash from "@/public/Trash";

export default function CartView() {
  const { cart } = useCartContext();

  return (
    <>
      <ul className="cart">
        {cart.map((item) => (
          <li key={item.title}>
            <Image src={item.image} alt={item.title} height={100} width={100} />
            <div className="text-content">
              <h4>{item.title}</h4>
              <h5>
                {item.price} X {item.quantity} = ${item.quantity * item.price}
              </h5>
              <div className="control-group">
                <div className="controls">
                  <button className="add">+</button>
                  <span>{item.quantity}</span>
                  <button className="minus">-</button>
                </div>
                <button>
                  <Trash />
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <style jsx>
        {`
          .cart {
            display: flex;
            flex-direction: column;
            padding: 0px;
            width: 100%;
          }

          .cart li {
            display: flex;
            margin: 0px 0px;
            border-bottom: 1px solid #a6a1a1a8;
            padding-bottom: 10px;
            align-items: center;
            width: 100%;
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
            height: 40px;
            width: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
          }

          .controls .add {
            background-color: green;
          }

          .controls .minus {
            background-color: red;
          }

          .controls button:hover {
            opacity: 0.8;
          }
        `}
      </style>
    </>
  );
}
