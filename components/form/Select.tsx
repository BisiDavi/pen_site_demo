import countries from "@/json/countries.json";
import type { FormElementType } from "@/types";

interface Props {
  content: FormElementType;
}

export default function SelectCountry({ content }: Props) {
  return (
    <div>
      <label htmlFor={content.name}>{content.label}</label>
      <select name={content.name}>
        {countries.map((country) => (
          <option key={country.Iso2} value={country.Iso2}>
            {country.name}
          </option>
        ))}
      </select>
    </div>
  );
}
