import Input from "@/components/form/Input";
import SelectCountry from "@/components/form/Select";
import type { formElementType } from "@/types";

export default function displayForm(formElement: formElementType) {
  switch (formElement.type) {
    case "input": {
      return <Input content={formElement} />;
    }
    case "selectCountry": {
      return <SelectCountry content={formElement} />;
    }
  }
}
