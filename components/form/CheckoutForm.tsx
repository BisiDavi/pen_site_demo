import displayForm from "@/components/form/displayForm";
import checkoutFormContent from "@/json/checkout.json";

export default function CheckoutForm() {
  return (
    <form>
      {checkoutFormContent.map((formElementArr, index) => (
        <div className="group" key={index}>
          {formElementArr.map((formElement, index) => (
            <div className="formElement" key={index}>
              {displayForm(formElement)}
            </div>
          ))}
        </div>
      ))}
          <button>Checkout</button>

    </form>
  );
}
