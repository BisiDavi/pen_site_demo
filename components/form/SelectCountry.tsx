import { useFormContext } from "react-hook-form";
import countries from "@/json/countries.json";
import type { formElementType } from "@/types";

interface Props {
  content: formElementType;
}

export default function SelectCountry({ content }: Props) {
  const {
    register,
    formState: { errors },
  }: any = useFormContext();
  return (
    <>
      <div className="select">
        <select name={content.name} {...register(content.name)}>
          <option>Select Country</option>
          {countries.map((country) => (
            <option key={country.Iso2} value={country.Iso2}>
              {country.name}
            </option>
          ))}
        </select>
        <p>{errors[content.name]?.message}</p>
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
