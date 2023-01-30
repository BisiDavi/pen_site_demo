import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { checkoutFormSchema } from "@/components/form/checkoutform.schema";
import displayForm from "@/components/form/displayForm";
import checkoutFormContent from "@/json/checkout.json";
import useStripePayment from "@/hooks/useStripePayment";
import useCartContext from "@/hooks/useCartContext";

export default function CheckoutForm() {
  const methods = useForm({
    resolver: yupResolver(checkoutFormSchema),
    mode: "all",
  });
  const { cart } = useCartContext();
  const { makePayment } = useStripePayment();

  function onSubmit(data: any) {
    console.log("data", data);
    makePayment(data.email);
  }
  const disableButton = cart.length > 0 ? false : true;
  return (
    <FormProvider {...methods}>
      <form className="checkoutForm" onSubmit={methods.handleSubmit(onSubmit)}>
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
        <button type="submit" disabled={disableButton}>
          Submit
        </button>
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
            margin-bottom: 0px;
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
          .checkoutForm button:disabled {
            background-color: gray;
            pointer-events: none;
          }
        `}
      </style>
    </FormProvider>
  );
}
