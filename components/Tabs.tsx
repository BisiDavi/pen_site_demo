import { useState } from "react";
import useCartContext from "@/hooks/useCartContext";

interface Props {
  tab1: JSX.Element;
  tab2: JSX.Element;
}

export default function Tabs({ tab1, tab2 }: Props) {
  const [tabState, setTabState] = useState("Products");
  const { cart } = useCartContext();

  return (
    <>
      <ul className="tabs">
        {["Products", "Checkout"].map((title) => {
          const activeTab = title === tabState ? "active" : "not-active";
          return (
            <li
              key={title}
              className={activeTab}
              onClick={() => setTabState(title)}
            >
              {title} {title === "Checkout" && <span>{cart.length}</span>}
            </li>
          );
        })}
      </ul>
      {tabState === "Products" ? (
        <div className="tab-1">{tab1}</div>
      ) : (
        <div className="tab-2">{tab2}</div>
      )}
      <style jsx>
        {`
          .tabs {
            font-size: 25px;
            width: 800px;
            height: 60px;
            box-shadow: 0px 5px 15px rgb(0 0 0 / 15%);
            padding: 5px 40px;
            margin: 40px auto;
            border-radius: 10px;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          .active {
            background-color: green;
            color: white;
            padding: 4px 15px;
            border-radius: 5px;
          }
          .tabs span {
            font-size: 15px;
            background-color: red;
            color: white;
            height: 25px;
            width: 25px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0px 20px;
            border-radius: 50%;
          }

          .tabs li {
            display: flex;
            align-items: center;
            padding: 5px 10px;
            border-radius: 5px;
          }

          .tabs li:hover {
            background-color: #a6a1a1a8;
          }
        `}
      </style>
    </>
  );
}
