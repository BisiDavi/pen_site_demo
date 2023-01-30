import countries from "@/json/countries.json";
import type { formElementType } from "@/types";

interface Props {
  content: formElementType;
}

export default function SelectCountry({ content }: Props) {
  return (
    <>
      <div className="select">
        <select name={content.name}>
          <option>Select Country</option>
          {countries.map((country) => (
            <option key={country.Iso2} value={country.Iso2}>
              {country.name}
            </option>
          ))}
        </select>
      </div>
      <style jsx>
        {`
          .select {
            display: flex;
            flex-direction: column;
            margin: 4px 0px;
          }
          .select select {
            height: 35px;
          }
        `}
      </style>
    </>
  );
}
