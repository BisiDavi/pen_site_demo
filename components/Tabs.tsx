import { useState } from "react";

interface Props {
  tab1: JSX.Element;
  tab2: JSX.Element;
}

export default function Tabs({ tab1, tab2 }: Props) {
  const [tabState, setTabState] = useState("Products");
  return (
    <>
      <ul className="header">
        {["Products", "Checkout"].map((title) => {
          const activeTab = title === tabState ? "active" : "not-active";
          return (
            <li
              key={title}
              className={activeTab}
              onClick={() => setTabState(title)}
            >
              {title}
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
          .header {
            font-size: 30px;
            width: 800px;
            height: 60px;
            box-shadow: 0px 5px 15px rgb(0 0 0 / 15%);
            padding: 0px 40px;
            margin: 40px auto;
            border-radius: 10px;
          }
          .active {
            background-color: green;
            color: white;
            padding: 4px 15px;
            border-radius: 5px;
          }
        `}
      </style>
    </>
  );
}
