import displayForm from "@/components/form/displayForm";
import checkoutFormContent from "@/json/checkout.json";

export default function CheckoutForm() {
  return (
    <>
      <form>
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
        <button>Checkout</button>
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
        `}
      </style>
    </>
  );
}
