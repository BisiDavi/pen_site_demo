import countries from "@/json/countries.json";

export default function SelectCountry({ content }) {
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
