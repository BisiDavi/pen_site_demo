import displayForm from "@/components/form/displayForm";
import checkoutFormContent from "@/json/checkout.json";

export default function CheckoutForm() {
  return (
    <>
      <form className="checkoutForm">
        <div className="elements">
          {checkoutFormContent.map((formElementArr, index) => (
            <div
              className={`groupElement group-${formElementArr.length}`}
              key={index}
            >
              {formElementArr.map((formElement, index) => (
                <div className="formElement" key={index}>
                  {displayForm(formElement)}
                </div>
              ))}
            </div>
          ))}
        </div>
        <button className="submit">Submit</button>
      </form>
      <style jsx>
        {`
          .groupElement {
            display: grid;
            gap: 20px;
            margin: 10px 0px;
          }
          .group-2 {
            grid-template-columns: repeat(2, 1fr);
          }
          .group-3 {
            grid-template-columns: repeat(3, 1fr);
          }
          .formElement {
            width: 100%;
          }
          .elements {
            margin-bottom: 20px;
          }
          .checkoutForm button {
            display: flex;
            margin: auto;
            padding: 10px 30px;
            background-color: #3b7ad1;
            color: white;
            border: none;
            border-radius: 5px;
            font-weight: bold;
            font-size: 15px;
            cursor: pointer;
          }
          .checkoutForm button:hover {
            opacity: 0.8;
          }
        `}
      </style>
    </>
  );
}
